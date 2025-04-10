import Product from "../models/Product.js";
import slugify from "slugify";
import User from "../models/user.js";
import { cloudinaryUploadImg } from "../utils/cloudinary.js";
import fs from 'fs';


export const createProduct = async (req, res)=>{
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title, { lower: true });
          }
        const newProduct = await Product.create(req.body);
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("Create Product Error:", error);
    res.status(500).json({ message: "Failed to create product" });
    }
}

// get product by id
export const getProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate("category").populate("rating.postedby", "firstName lastName");;
        if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);

    } catch (error) {
        console.error("Get Product Error:", error);
    res.status(500).json({ message: "Failed to fetch product" });
    }
}

// get all products

export const getAllProducts = async (req, res) => {
   
    try {
    
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.error("Get All Products Error:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  };

  //update product 

  export const updateProduct = async (req,res)=>{
try {
    if (req.body.title){
        req.body.slug= slugify(req.body.title,{lower:true})
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      }); 
      if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product updated", product: updatedProduct });
} catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ message: "Failed to update product" });
}
  }

  //deleted product

  export const deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Delete Product Error:", error);
      res.status(500).json({ message: "Failed to delete product" });
    }
  };



export const getFilteredProducts = async (req, res) => {
  try {
    // 1. Copy the query object
    const queryObj = { ...req.query };

    // 2. Fields to exclude from filter
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((field) => delete queryObj[field]);

    // const filterProduct = await Product.find(queryObj)
    // res.json(filterProduct)

    // 3. Convert filter values (e.g., price[gte], price[lte]) to MongoDB operators
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    const filter = JSON.parse(queryStr);

    // 4. Build the query
    let query = Product.find(filter);

    // 5. Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // 6. Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // 7. Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // 8. Execute the query
    const products = await query;

    res.status(200).json({
      status: "success",
      results: products.length,
      page,
      products,
    });
  } catch (error) {
    console.error("Get Filtered Products Error:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

 // make sure this import is correct

 export const addToWishlist = async (req, res) => {
  const { id } = req.user;
  const { prodId } = req.body;

  try {
    const user = await User.findById(id); // ✅ Add 'await' here

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const alreadyAdded = user.wishlist.includes(prodId);

    if (alreadyAdded) {
      // Remove from wishlist
      user.wishlist.pull(prodId);
    } else {
      // Add to wishlist
      user.wishlist.push(prodId);
    }

    await user.save();

    res.status(200).json({
      message: "Wishlist updated successfully",
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Add to Wishlist Error:", error);
    res.status(500).json({ message: "Server error while updating wishlist" });
  }
};

//rating

export const rating = async (req, res) => {
  const { id } = req.user; // user ID from authMiddleware
  const { star, prodId } = req.body;

  try {
    const product = await Product.findById(prodId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already rated
    const alreadyRated = product.ratings.find(
      (rating) => rating.postedby.toString() === id.toString()
    );

    if (alreadyRated) {
      // Update existing rating
      alreadyRated.star = star;
    } else {
      // Add new rating
      product.ratings.push({ star, postedby: id });
    }

    // Recalculate average rating
    const totalRatings = product.ratings.length;
    const ratingSum = product.ratings.reduce((sum, r) => sum + r.star, 0);
    const averageRating = Math.round(ratingSum / totalRatings);

    product.totalrating = averageRating;

    await product.save();

    res.status(200).json({
      message: alreadyRated ? "Rating updated" : "Rating added",
      product,
    });
  } catch (error) {
    console.error("Rating Error:", error);
    res.status(500).json({ message: "Server error while rating product" });
  }
};

// upload image

export const uploadImages = async(req,res)=>{
 const {id}= req.params;
 try {
  const uploader = (path) => cloudinaryUploadImg(path,"images");
  const urls =[];
  const files = req.files;
  for (const file of files){
    const {path} = file;
    const newpath = await uploader(path);
    urls.push(newpath);
    fs.unlinkSync(path)
  }
  const findProduct = await Product.findByIdAndUpdate(id,
    {
      images:urls.map((file)=>{
    return file;
  }),
},{new:true})
res.json(findProduct)
 } catch (error) {
  console.error("Image Upload Error:", error);
  res.status(500).json({ message: "Image upload failed" });
 }
}
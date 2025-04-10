import Blog from "../models/Blog.js";
import { cloudinaryUploadImg } from "../utils/cloudinary.js";
import fs from "fs"

// CREATE
export const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Blog creation failed" });
  }
};

// READ ONE
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Increase view count
    blog.numViews += 1;
    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error fetching blog" });
  }
};

// READ ALL
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error fetching blogs" });
  }
};

// UPDATE
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Blog update failed" });
  }
};

// DELETE
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error deleting blog" });
  }
};

// LIKE
export const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    const userId = req.user._id;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const alreadyLiked = blog.likes.includes(userId);
    const alreadyDisliked = blog.dislikes.includes(userId);

    if (alreadyDisliked) {
      blog.dislikes.pull(userId);
      blog.isDisliked = false;
    }

    if (alreadyLiked) {
      blog.likes.pull(userId);
      blog.isLiked = false;
    } else {
      blog.likes.push(userId);
      blog.isLiked = true;
    }

    const updatedBlog = await blog.save();
    res.status(200).json({ message: alreadyLiked ? "Unliked" : "Liked", blog: updatedBlog });
  } catch (error) {
    console.error("Like Blog Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DISLIKE
export const dislikeBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    const userId = req.user._id;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const alreadyDisliked = blog.dislikes.includes(userId);
    const alreadyLiked = blog.likes.includes(userId);

    if (alreadyLiked) {
      blog.likes.pull(userId);
      blog.isLiked = false;
    }

    if (alreadyDisliked) {
      blog.dislikes.pull(userId);
      blog.isDisliked = false;
    } else {
      blog.dislikes.push(userId);
      blog.isDisliked = true;
    }

    const updatedBlog = await blog.save();
    res.status(200).json({ message: alreadyDisliked ? "Removed Dislike" : "Disliked", blog: updatedBlog });
  } catch (error) {
    console.error("Dislike Blog Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


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
  const findBlog = await Blog.findByIdAndUpdate(id,
    {
      images:urls.map((file)=>{
    return file;
  }),
},{new:true})
res.json(findBlog)
 } catch (error) {
  console.error("Image Upload Error:", error);
  res.status(500).json({ message: "Image upload failed" });
 }
}
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobile, profilePic } = req.body;

    if (!firstName || !lastName || !email || !password || !mobile) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobile,
      profilePic,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
 

    res
      .cookie("token", generateToken(user._id), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//admin login

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Optional: Block login for non-admins if you only want admin login here
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    res
      .cookie("token", generateToken(user._id), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Admin login successful",
        user: {
          id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
        },
      });
  } catch (error) {
    console.error("Admin Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
  });
  res.status(200).json({ message: "Logout successful" });
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User not found" });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//update user
export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, profilePic, password } = req.body;

    const updateData = { firstName, lastName, email, mobile, profilePic };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, updateData, {
      new: true,
    }).select("-password");

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "User not updated" });
  }
};
//block user
export const blockUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
    res.status(200).json({ message: "User blocked successfully" });
  } catch (error) {
    res.status(500).json({ message: "User not blocked" });
  }
};
//unblock user
export const unblockUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true });
    res.status(200).json({ message: "User unblocked successfully" });
  } catch (error) {
    res.status(500).json({ message: "User not unblocked" });
  }
};
 
//update user role
export const updateUserRole = async (req, res) => {
    try {
        const {role} = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, {role}, {new:true});
        if (!user) return res.status(404).json({message:"User not found"});
        res.status(200).json({message:"User role updated successfully",user});

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "User role not Update" }); 
    }
}


//getwishlist
export const getWishlist = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id).populate("wishlist"); // populate if wishlist stores product IDs

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Wishlist fetched successfully",
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Get Wishlist Error:", error);
    res.status(500).json({ message: "Failed to fetch wishlist" });
  }
};

//save user address
export const saveUserAddress = async (req, res) => {
  const { address } = req.body;
  const { id } = req.user; // from authMiddleware

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { address },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Address updated successfully",
      address: user.address,
    });
  } catch (error) {
    console.error("Save Address Error:", error);
    res.status(500).json({ message: "Failed to update address" });
  }
};

// Add or update user cart
export const userCart = async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;

  let products = [];
  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    let productDetails = await Product.findById(cart[i]._id).select("price");
    products.push({
      product: cart[i]._id,
      count: cart[i].count,
      color: cart[i].color,
      price: productDetails.price,
    });

    cartTotal += productDetails.price * cart[i].count;
  }

  // Remove existing cart
  const existingCart = await Cart.findOne({ orderBy: _id });
  if (existingCart) await existingCart.deleteOne();

  // Save new cart
  const newCart = await new Cart({
    products,
    cartTotal,
    orderBy: _id,
  }).save();

  res.json({ success: true, cart: newCart });
};

// Get user cart
export const getUserCart = async (req, res) => {
  const { _id } = req.user;
  const cart = await Cart.findOne({ orderBy: _id }).populate("products.product", "_id title price");

  res.json(cart);
};

// Empty user cart
export const emptyCart = async (req, res) => {
  const { _id } = req.user;
  const cart = await Cart.findOneAndDelete({ orderBy: _id });
  res.json({ success: true, message: "Cart emptied", cart });
};
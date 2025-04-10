import express from "express";
import {
  addToWishlist,
  createProduct,
  deleteProduct,
  getAllProducts,
  getFilteredProducts,
  getProduct,
  rating,
  updateProduct,
  uploadImages
} from "../controller/productController.js";
import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadimages.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createProduct);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("image", 10), productImgResize, uploadImages);
router.get("/all", getAllProducts); // All products
router.get("/filter", getFilteredProducts); // Filtered products
router.get("/:id", getProduct); // Get by ID
router.put("/update/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

export default router;

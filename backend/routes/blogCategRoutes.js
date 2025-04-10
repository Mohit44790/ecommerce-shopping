import express from "express";
import {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getAllBlogCategories
} from "../controller/blogCategController.js";
import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlogCategory);
router.put("/update/:id", authMiddleware, isAdmin, updateBlogCategory);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlogCategory);
router.get("/get/:id", getBlogCategory);
router.get("/all", getAllBlogCategories);

export default router;

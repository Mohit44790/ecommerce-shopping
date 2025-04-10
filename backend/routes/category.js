import express from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
} from "../controller/categoryController.js";
import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createCategory);
router.put("/update/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/get/:id", getCategory);
router.get("/all", getAllCategories);

export default router;

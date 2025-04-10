import express from "express";
import {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
} from "../controller/blogController.js";
import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadimages.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlog);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("image", 10), productImgResize, uploadImages);
router.get("/get/:id", getBlog);
router.get("/all", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/like", authMiddleware, likeBlog);
router.put("/dislike", authMiddleware, dislikeBlog);

export default router;

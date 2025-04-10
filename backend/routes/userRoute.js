import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  updateUserRole,
  loginAdmin,
  getWishlist,
  saveUserAddress,
  
  userCart,
  getUserCart,
  emptyCart,
} from "../controller/userController.js"
import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);
router.get("/logout", logoutUser);

router.get("/all-users", authMiddleware,isAdmin, getAllUsers);
router.get("/user/:id", authMiddleware, getUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.post("/user-cart", authMiddleware, userCart);
router.get("/getcart", authMiddleware, getUserCart);
router.delete("/delete-cart", authMiddleware, emptyCart);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteUser);
router.put("/update/:id", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveUserAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/update-role/:id",authMiddleware ,isAdmin , updateUserRole)

export default router;

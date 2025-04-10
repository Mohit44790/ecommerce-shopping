import express from "express";

import { authMiddleware, isAdmin } from "../middlewares/authmiddleware.js"
import { createOrder, getAllOrders, getUserOrders, updateOrderStatus } from "../controller/orderController.js";

const router = express.Router();

router.post("/", authMiddleware, createOrder); // Place order
router.get("/", authMiddleware, isAdmin, getAllOrders); // Admin - all orders
router.get("/my-orders", authMiddleware, getUserOrders); // User - own orders
router.put("/:id", authMiddleware, isAdmin, updateOrderStatus); // Admin - update status

export default router;

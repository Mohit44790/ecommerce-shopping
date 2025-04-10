import Order from "../models/Order.js";
import Product from "../models/Product.js";

// Create a new order
export const createOrder = async (req, res) => {
  const { products, totalAmount, paymentMethod, shippingAddress } = req.body;
  const userId = req.user.id;

  try {
    const newOrder = await Order.create({
      user: userId,
      products,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
};

// Get all orders (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// Get user orders
export const getUserOrders = async (req, res) => {
  const userId = req.user.id;
  try {
    const orders = await Order.find({ user: userId }).populate("products.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your orders" });
  }
};

// Update order status (admin)
export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { orderStatus, paymentStatus } = req.body;

  try {
    const updated = await Order.findByIdAndUpdate(
      id,
      { orderStatus, paymentStatus },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order" });
  }
};

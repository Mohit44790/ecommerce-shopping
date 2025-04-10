import BlogCategory from "../models/BlogCategory.js";

// Create Blog Category
export const createBlogCategory = async (req, res) => {
  try {
    const newCategory = await BlogCategory.create(req.body);
    res.status(200).json({ message: "Blog category created successfully", newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Blog Category
export const updateBlogCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await BlogCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.status(200).json({ message: "Blog category updated successfully", updatedCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Blog Category
export const deleteBlogCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await BlogCategory.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.status(200).json({ message: "Blog category deleted successfully", deletedCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Single Blog Category
export const getBlogCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await BlogCategory.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.status(200).json({ message: "Blog category fetched successfully", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Blog Categories
export const getAllBlogCategories = async (req, res) => {
  try {
    const categories = await BlogCategory.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All blog categories fetched", categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

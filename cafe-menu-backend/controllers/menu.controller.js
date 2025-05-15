import {
  addMenuItem,
  getAllMenuItems,
  deleteMenuItem,
} from "../models/menu.model.js";

// Add a new menu item
export const createMenuItem = (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price || price <= 0) {
    return res.status(400).json({
      message: "All fields are required and price must be greater than 0.",
    });
  }

  addMenuItem(title, description, price, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error adding menu item.", error: err.message });
    }
    res.status(201).json({ message: "Menu item added successfully." });
  });
};

// Get all menu items
export const getMenuItems = (req, res) => {
  getAllMenuItems((err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving menu items.", error: err.message });
    }
    res.json(results);
  });
};

// Delete menu item
export const handleDeleteMenuItem = (req, res) => {
  const { id } = req.params;

  deleteMenuItem(id, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting menu item.", error: err.message });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.json({ message: "Item deleted successfully!" });
  });
};

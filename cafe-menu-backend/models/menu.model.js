import { db } from "../config/db.js";

// Add item to menu
export const addMenuItem = (title, description, price, callback) => {
  const query =
    "INSERT INTO menu_items (title, description, price) VALUES (?, ?, ?)";
  db.query(query, [title, description, price], callback);
};

// Get all menu items
export const getAllMenuItems = (callback) => {
  const query = "SELECT * FROM menu_items";
  db.query(query, callback);
};

// Delete menu item
export const deleteMenuItem = (id, callback) => {
  const query = "DELETE FROM menu_items WHERE id = ?";
  db.query(query, [id], callback);
};

import express from "express";
import {
  createMenuItem,
  getMenuItems,
  handleDeleteMenuItem,
} from "../controllers/menu.controller.js";

const router = express.Router();

// Add a new menu item
router.post("/item", createMenuItem);

// Get all menu items
router.get("/items", getMenuItems);

// Delete Item
router.delete("/item/:id", handleDeleteMenuItem);

export default router;

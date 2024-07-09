const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Admin: Get all users
router.get("/users", authMiddleware, adminMiddleware, getUsers);

// Admin: Delete user by ID
router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);

// Admin: Update user by ID
router.put("/users/:id", authMiddleware, adminMiddleware, updateUser);

module.exports = router;

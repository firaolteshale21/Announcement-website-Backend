const express = require("express");
const router = express.Router();
const { getNews } = require("../controllers/newsController");
const {
  signup,
  login,
  getProfile,
  updateProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// User Signup
router.post("/signup", signup);

// User Login
router.post("/login", login);

// User Profile
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

// User News Feed
router.get("/feed", authMiddleware, getNews);

module.exports = router;

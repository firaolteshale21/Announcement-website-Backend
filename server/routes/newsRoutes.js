const express = require("express");
const router = express.Router();
const { getNews, postNews } = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Get all news (accessible to all users)
router.get("/feed", authMiddleware, getNews);

// Post news (admin only)
router.post("/feed", authMiddleware, adminMiddleware, postNews);

module.exports = router;

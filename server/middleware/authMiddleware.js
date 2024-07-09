require("dotenv").config();
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    // Verify the token using the secret from the .env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user has the admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    // If the user is an admin, proceed to the next middleware/controller
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = adminMiddleware;

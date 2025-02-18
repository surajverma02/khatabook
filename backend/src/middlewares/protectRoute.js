const jwt = require("jsonwebtoken");
const logger = require("../config/logger");
const User = require("../models/user.model");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    const user = await User.findById(decoded.userId);
    if (!decoded) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    logger.error(`Middleware :: Protect Route : ${error.message}`);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { protectRoute };

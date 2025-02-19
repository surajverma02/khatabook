const express = require("express");
const router = express.Router();

const { signup, login, logout, authCheck } = require("../controllers/auth.controller");
const { protectRoute } = require("../middlewares/protectRoute");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/check", protectRoute, authCheck);

module.exports = router;

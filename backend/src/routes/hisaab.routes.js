const express = require("express");
const router = express.Router();

const {
  createHisaab,
  getAllHisaabs,
  getHisaab,
  deleteHisaab,
  updateHisaab,
} = require("../controllers/hisaab.controller");
const { protectRoute } = require("../middlewares/protectRoute");

router.get("/", protectRoute, getAllHisaabs);
router.post("/create", protectRoute, createHisaab);
router.get("/:id", protectRoute, getHisaab);
router.delete("/delete/:id", protectRoute, deleteHisaab);
router.put("/update/:id", protectRoute, updateHisaab);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", getAllHisaabs);
router.post("/create", createHisaab);
router.get("/:id", getHisaab);
router.delete("/delete/:id", deleteHisaab);
router.put("/update/:id", updateHisaab);

module.exports = router;

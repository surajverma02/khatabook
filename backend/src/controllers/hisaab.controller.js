const User = require("../models/user.model");
const Hisaab = require("../models/hisaab.model");
const logger = require("../config/logger");
const { formatDate } = require("../config/date");
const bcrypt = require("bcryptjs");

const createHisaab = async (req, res) => {
  const { title, description, isEncrypted, passcode } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      message: "Title and description are required",
    });
  }
  if (isEncrypted && !passcode) {
    return res.status(400).json({
      message: "Passcode is required to encrypt",
    });
  }

  try {
    const date = formatDate(new Date());
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPasscode = isEncrypted ? await bcrypt.hash(passcode, salt) : "";

    const hisaab = new Hisaab({
      title,
      description,
      date,
      isEncrypted,
      passcode: hashPasscode,
      userId,
    });

    user.hisaabIds.push(hisaab._id);
    await user.save();
    await hisaab.save();

    return res.status(201).json(hisaab);
  } catch (error) {
    logger.error(`Hisaab Controller :: Create Hisaab : ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllHisaabs = async (req, res) => {
  try {
    const hisaabs = await Hisaab.find();
    if (!hisaabs) {
      return res.status(400).json({
        message: "No hisaab found",
      });
    }

    return res.status(200).json(hisaabs);
  } catch (error) {
    logger.error(`Hisaab Controller :: Get All Hisaabs : ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getHisaab = async (req, res) => {
  try {
    const { id: hisaabId } = req.params;
    const hisaab = await Hisaab.findById(hisaabId);
    if (!hisaab) {
      return res.status(400).json({
        message: "No hisaab found",
      });
    }

    return res.status(200).json(hisaab);
  } catch (error) {
    logger.error(`Hisaab Controller :: Get Hisaab : ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteHisaab = async (req, res) => {
  try {
    const { id: hisaabId } = req.params;
    await Hisaab.findByIdAndDelete(hisaabId);

    return res.status(200).json({ message: "Hisaab deleted succefully" });
  } catch (error) {
    logger.error(`Hisaab Controller :: Get Hisaab : ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateHisaab = async (req, res) => {};

module.exports = {
  createHisaab,
  getAllHisaabs,
  getHisaab,
  deleteHisaab,
  updateHisaab,
};

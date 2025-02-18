const mongoose = require("mongoose");

const hisaabSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  isEncrypted: {
    type: Boolean,
    default: false,
  },
  passcode: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Hisaab", hisaabSchema);

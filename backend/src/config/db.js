const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    logger.info(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    logger.fatal(`MongoDB Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };

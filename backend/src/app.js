const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const logger = require("./config/logger");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const hisaabRoutes = require("./routes/hisaab.routes");

const path = require("path");
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/users/auth", authRoutes);
app.use("/api/hisaabs", hisaabRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  logger.info(`Server running at PORT: ${PORT}`);
  connectDB();
});

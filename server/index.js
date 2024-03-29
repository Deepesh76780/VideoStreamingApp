import Express from "express";
import mongoose from "mongoose";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = Express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
app.use(cookieParser());
app.use(Express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";

  return res
    .status(status)
    .json({ success: false, status: status, message: message });
});
app.use(cors());
app.listen(8801, () => {
  // console.log("yes");
  connect();
  console.log("connected!");
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import urlRoutes from "./routes/urlRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin: " + origin));
      }
    },
  })
);
app.use(express.json());
app.use("/", urlRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

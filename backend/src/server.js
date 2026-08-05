import express from "express";
import cookieParser from "cookie-parser";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const PORT = ENV.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

app.get("/api/health", (req, res) => res.send("API Running"));
app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});

import express from "express";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js";

const PORT = ENV.PORT || 3000;

const server = express();

server.use(express.json())

server.use("/api/auth", authRoutes);
// server.use("/api/messages", messageRoutes);

server.get("/api/health", (req, res) => res.send("API Running"))
server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});

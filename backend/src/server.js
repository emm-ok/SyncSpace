import express from "express";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const server = express();

const PORT = ENV.PORT || 3000;

server.use("/api/auth", authRoutes);
server.use("/api/messages", messageRoutes);

server.listen(3000, () => {
  console.log("Server running on port: " + PORT);
});

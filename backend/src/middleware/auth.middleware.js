import jwt from "jsonwebtoken";
import { ENV } from "../lib/env";
import User from "../models/User";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    if (!token)
      return res.status(401).json({ message: "Unauthorized - No token provided" });

    const decoded = jwt.sign(token, ENV.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ message: "Unauthorized - Invlaid token" });

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

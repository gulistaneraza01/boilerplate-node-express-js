import express from "express";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

// Mount routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

// API info endpoint
router.get("/", (req, res) => {
  res.json({
    message: "API Routes",
    version: "1.0.0",
    availableRoutes: {
      users: "/api/users",
      auth: "/api/auth",
    },
  });
});

export default router;

import express from "express";

const router = express.Router();

// POST /api/auth/login - User login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required",
    });
  }

  // Mock authentication (replace with real authentication logic)
  if (email === "admin@example.com" && password === "password") {
    res.json({
      message: "Login successful",
      token: "mock-jwt-token",
      user: { id: 1, email, name: "Admin User" },
    });
  } else {
    res.status(401).json({
      error: "Invalid credentials",
    });
  }
});

// POST /api/auth/register - User registration
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Name, email, and password are required",
    });
  }

  // Mock registration (replace with real registration logic)
  res.status(201).json({
    message: "User registered successfully",
    user: { id: 2, name, email },
  });
});

// POST /api/auth/logout - User logout
router.post("/logout", (req, res) => {
  res.json({
    message: "Logout successful",
  });
});

// GET /api/auth/me - Get current user
router.get("/me", (req, res) => {
  // Mock user data (replace with real authentication middleware)
  res.json({
    user: { id: 1, name: "John Doe", email: "john@example.com" },
  });
});

export default router;

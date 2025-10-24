import request from "supertest";
import app from "../app.js";

describe("API Endpoints", () => {
  describe("GET /", () => {
    it("should return welcome message", async () => {
      const response = await request(app).get("/").expect(200);

      expect(response.body.message).toBe("Welcome to Express Boilerplate API");
      expect(response.body.version).toBe("1.0.0");
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health").expect(200);

      expect(response.body.status).toBe("OK");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body).toHaveProperty("uptime");
    });
  });

  describe("GET /api", () => {
    it("should return API information", async () => {
      const response = await request(app).get("/api").expect(200);

      expect(response.body.message).toBe("API Routes");
      expect(response.body).toHaveProperty("availableRoutes");
    });
  });

  describe("GET /api/users", () => {
    it("should return users list", async () => {
      const response = await request(app).get("/api/users").expect(200);

      expect(response.body.message).toBe("Get all users");
      expect(Array.isArray(response.body.users)).toBe(true);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login with valid credentials", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "admin@example.com",
          password: "password",
        })
        .expect(200);

      expect(response.body.message).toBe("Login successful");
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("user");
    });

    it("should reject invalid credentials", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "wrong@example.com",
          password: "wrongpassword",
        })
        .expect(401);

      expect(response.body.error).toBe("Invalid credentials");
    });

    it("should require email and password", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({})
        .expect(400);

      expect(response.body.error).toBe("Email and password are required");
    });
  });
});

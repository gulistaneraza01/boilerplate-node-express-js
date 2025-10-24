export default {
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!src/app.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

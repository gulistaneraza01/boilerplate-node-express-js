# Express Boilerplate

A modern Node.js Express boilerplate with pnpm package manager, featuring ES6 modules, security middleware, rate limiting, and a clean project structure.

## Features

- 🚀 **Express.js** - Fast, unopinionated web framework
- 📦 **pnpm** - Fast, disk space efficient package manager
- 🔧 **ES6 Modules** - Modern JavaScript module system
- 🔒 **Security** - Helmet.js for security headers
- 🛡️ **Rate Limiting** - Built-in rate limiting middleware
- 🌐 **CORS** - Cross-Origin Resource Sharing support
- 📝 **Logging** - Morgan HTTP request logger
- 🔧 **Environment Variables** - dotenv for configuration
- 📁 **Clean Structure** - Organized folder structure
- 🧪 **Testing Ready** - Jest and Supertest configured
- 📏 **Linting** - ESLint for code quality

## Project Structure

```
├── src/
│   ├── app.js              # Main application file
│   ├── routes/             # Route definitions
│   │   ├── index.js        # Main router
│   │   ├── userRoutes.js   # User routes
│   │   └── authRoutes.js   # Authentication routes
│   ├── middleware/         # Custom middleware
│   ├── controllers/        # Route controllers
│   ├── models/            # Data models
│   ├── config/            # Configuration files
│   └── utils/              # Utility functions
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
├── env.example           # Environment variables example
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js (>= 16.0.0)
- pnpm (>= 7.0.0)

**Note**: This boilerplate uses ES6 modules (`import`/`export` syntax) which requires Node.js 16+ and the `"type": "module"` field in package.json.

### Installation

1. Clone or download this boilerplate
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy environment variables:

   ```bash
   cp env.example .env
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `pnpm start` - Start the production server
- `pnpm dev` - Start the development server with nodemon
- `pnpm test` - Run tests with Jest
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically

## API Endpoints

### Health Check

- `GET /health` - Server health status

### API Routes

- `GET /api` - API information
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Authentication Routes

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

## Environment Variables

Copy `env.example` to `.env` and configure:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `CORS_ORIGIN` - CORS origin (default: \*)

## Security Features

- **Helmet.js** - Sets various HTTP headers for security
- **Rate Limiting** - Limits requests per IP (100 requests per 15 minutes)
- **CORS** - Configurable Cross-Origin Resource Sharing
- **Input Validation** - Basic request validation examples

## Development

### ES6 Modules

This boilerplate uses ES6 modules throughout:

```javascript
// Import statements
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// Export statements
export default router;
```

**Important Notes:**

- All import paths must include file extensions (`.js`)
- Use `import.meta.url` instead of `__filename` or `__dirname`
- The `"type": "module"` field in package.json enables ES6 modules

### Adding New Routes

1. Create a new route file in `src/routes/`
2. Import and mount it in `src/routes/index.js`
3. Add corresponding controller logic

### Adding Middleware

1. Create middleware files in `src/middleware/`
2. Import and use them in `src/app.js` or specific routes

### Database Integration

The boilerplate is ready for database integration. Common options:

- MongoDB with Mongoose
- PostgreSQL with Sequelize
- MySQL with Sequelize
- SQLite with Sequelize

## Testing

Run tests with:

```bash
pnpm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - feel free to use this boilerplate for your projects!

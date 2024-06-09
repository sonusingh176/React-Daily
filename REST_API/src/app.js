const express =require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const database = require('./config/db.config');

// Load environment variables from .env file
dotenv.config();
database();

// console.log(process.env.DB_URL);



/**
 * app.use() ka work middleware ko register krna hai.
 * express.json() ek built-in middleware function hai , jo incoming request bodies ko JSON format me parse karta hai.
 * express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
 */
app.use(express.json());

/**
 * app.use() ke through Routes ko mount kar rahe hai.
 */
app.use('/api/v1/users', userRoutes)


module.exports = app;


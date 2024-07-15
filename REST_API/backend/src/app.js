const express =require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const dotenv = require('dotenv');
const database = require('./config/db.config');
var cors = require('cors')

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


// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:5173'}));

/**
 * app.use() ke through Routes ko mount kar rahe hai.
 */
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/blog', blogRoutes)


module.exports = app;


const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB=require('./config/db.config')
const cors =require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
var cookieParser = require('cookie-parser')


const userRoutes = require('./routes/userRouter');

dotenv.config();

const URL=process.env.DB_URL;
connectDB();

app.use(express.json());
app.use(cookieParser());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true // This enables the sending of cookies across domains
    }))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,// Don't create a session unless the user is authenticated
    store: MongoStore.create({ 
        mongoUrl: URL, //pointing to your MongoDB database.
        ttl:  60 * 1 // 1 MIN expiration
      }),
    cookie: { 
      secure: false ,// Set to 'false' since you're working on HTTP (local development)
      maxAge:  60 * 1000,// 1 minute of inactivity
    },
    rolling: true // Resets the expiration countdown on every request
}))



/**
 * app.use() ke through Routes ko mount kar rahe hai.
 */
app.use('/api/user',userRoutes);


module.exports = app;



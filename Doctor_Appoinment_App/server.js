const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

//dotenv Config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app= express();

//middleware
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/api/users',userRoutes);

// port
const port =process.env.PORT || 8080
//listen port
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port${process.env.PORT}`.bgCyan.white);
});
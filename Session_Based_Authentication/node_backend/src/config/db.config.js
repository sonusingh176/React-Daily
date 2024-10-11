//You can connect to MongoDB with the mongoose.connect() method.

const mongoose = require('mongoose');
require('dotenv').config() // Ensure dotenv is configured to load environment variables


const URL=process.env.DB_URL;

console.log(URL)
const connectDB = async()=>{
    try {
        await mongoose.connect(URL);
        console.log('database connection established');
        
    } catch (error) {
        console.log('database connection error');
        
    }
}

module.exports = connectDB;
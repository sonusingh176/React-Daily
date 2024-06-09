const mongoose = require('mongoose');

require('dotenv').config();// Ensure dotenv is configured to load environment variables

const DB_URL1 = process.env.DB_URL;

const database =async()=>{
    try {
        //onnect to MongoDB using mongoose.connect() method
       await mongoose.connect(DB_URL1);
       console.log('database connected');
        

    } catch (error) {
        console.log('database not connected');
    }
}

module.exports =database;
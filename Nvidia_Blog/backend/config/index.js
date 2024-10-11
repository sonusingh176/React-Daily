const dotenv = require('dotenv').config();// Ensure dotenv is configured to load environment variables

const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING= process.env.MongoDB_CONNECTION_STRING;

module.exports ={
    PORT,
    MONGODB_CONNECTION_STRING
}
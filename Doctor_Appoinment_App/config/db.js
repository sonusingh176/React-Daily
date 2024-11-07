let mongoose =require('mongoose');
const color = require('colors');

const connectDB =async()=>{

    try {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
        
    } catch (error) {
         console.log(`Mongodb connection Issue ${error}`.bgRed.white);
        
    }
}

module.exports = connectDB;
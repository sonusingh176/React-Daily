import 'dotenv/config'
import mongoose from 'mongoose'



const connectDB = async() => {
 
    try {
            const res = await mongoose.connect(process.env.DB_URI)
            console.log('database is connected at port:', res.connection.port);

        
    } catch (error) {
        console.log('connection error', error);
    }

}

export default connectDB
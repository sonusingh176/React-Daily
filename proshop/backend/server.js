import express from 'express'
import dotenv from 'dotenv'
dotenv.config();// This line loads environment variables from the .env file
import  connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound , errorHandler} from './middleware/errorMiddleware.js';


const port = process.env.PORT || 8000 ; // accessing the value of the environment variable named PORT using the process.env . and If PORT is not set, default to 8000
// console.log(port)

connectDB() //Connect to MongoDB

const app = express();

app.get('/', (req,res)=>{
    res.send('API is running')
});


app.use('/api/products',productRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
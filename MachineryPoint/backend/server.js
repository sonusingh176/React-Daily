import express from 'express';
import bodyParser from 'body-parser';

const app = express();
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/dbconnection.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { errorMiddleware } from './middleware/errorMiddleware.js';


import 'dotenv/config'



connectDB();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use('/api', authRoutes)
app.use(errorMiddleware)


app.listen(process.env.SERVER_PORT,function(){
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});
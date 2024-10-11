const express = require('express');
const dbConnect=require('./database/index')
const {PORT} =require('./config/index')

const app = express();

dbConnect();
app.get('/',(req,res)=>res.json({msg:'hello'}));

app.listen(PORT,console.log(`server is running on port : ${PORT}`));
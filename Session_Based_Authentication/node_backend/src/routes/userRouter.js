const express = require('express');
const route = express.Router();
const {logIn,logOut,profile}=require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');



// Login route
route.post('/login',logIn);

// Logout route
route.post('/logout',authMiddleware ,logOut);


route.post('/profile',profile);



route.get('/checkAuth',authMiddleware,(req,res)=>{
    res.json({message:'User is authenticated', userId : req.session.userId});
});

module.exports  =route
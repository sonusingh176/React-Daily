const express = require('express');
//Router-level middleware
const route=express.Router(); 
const {signUp,signIn} = require('../controller/userController');


route.post('/signup', signUp);
route.post('/signin', signIn);

//Now we can use this in app.js
module.exports =route;
const express = require('express');
//router object
const router=express.Router();

const {loginUser,registerUser,authUser,applyDoctor} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//Login route
router.post('/login', loginUser);

//Register route
router.post('/register', registerUser);

//Auth user
router.post('/getAuthUser', authMiddleware,authUser);

//Apply Doctor 
router.post('/apply-doctor',authMiddleware,applyDoctor);

module.exports = router;

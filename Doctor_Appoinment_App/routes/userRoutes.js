const express = require('express');
//router object
const router=express.Router();

const {loginUser,registerUser,authUser} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//Login route
router.post('/login', loginUser);

//Register route
router.post('/register', registerUser);

//Auth user
router.post('/getAuthUser', authMiddleware,authUser);

module.exports = router;

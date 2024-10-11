const User= require('../models/userModel');
const bcrypt = require('bcrypt');

const logIn =async(req,res) => {

    const {email,password} = req.body;

    try {
        const existsUser = await User.findOne({email: email});

        if (!existsUser) {
            return res.status(400).json({ message: 'Email not found' }); 
        }

        const matchPassword = await bcrypt.compare(password, existsUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create a session
        req.session.userId = existsUser._id;
         // Send response
        return res.json({ status: '200', userName: existsUser.name });
       
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while logging in.' });
    }
   

}


const logOut =async(req,res) => {

    
}

const profile =(req,res)=>{
    console.log('profile Area');
}


module.exports = {logIn,logOut,profile}

const userModel = require('../models/userModels');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;

const signUp = async(req,res)=>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
    
    const hashpassword= bcrypt.hashSync(password,10);
    const existUser = await userModel.findOne({email:email});
    if(existUser){
        res.status(400).json({message: 'record already exists'});
    }else{

        try {
            await userModel.create({
                username:username,
                email:email,
                password:hashpassword
            });
    
            //sign() is jwt method.
            //jwt.sign({payload},private_key);
            const token =jwt.sign({username:username, email:email},PRIVATE_KEY);
            const userobj ={username:username, email:email}
    
            //here we send token into response.
            res.status(200).json({userobj:userobj, token:token,status:201, message: 'record  Added'});
    
        } catch (error) {
            res.status(400).json({message: 'record not Added'});
        }

    }

 
   
  
}


const signIn = async(req,res)=>{
    const {email,password} = req.body;
console.log(email,password);
    try {
        const existsUser = await userModel.findOne({ email: email });
        if(existsUser){

            const matchpassword = await bcrypt.compare(password,existsUser.password);
            if(matchpassword){
                //sign() method ka use JWT generate karne ke liye kiya jaata hai. ye 3 Parameters leta hai.
                // sign({payload},Secret Key,{ expiresIn: '1h' })
                const token =jwt.sign({username:existsUser.username, email:existsUser.email},PRIVATE_KEY);
                res.status(200).json({username:existsUser.username , token:token ,message: 'login successful'});
            }else{
                res.status(400).json({message: 'Password incorrect'});
            }

            res.status(200).json({user:user});

        }else{
            res.status(400).json({message: 'Email not found'});
        }

    } catch (error) {
        
    }
    // res.send('Save user');
}

module.exports ={signUp,signIn}
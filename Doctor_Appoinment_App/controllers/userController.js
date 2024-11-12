const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const loginUser = async(req,res)=>{

    const {email,password} = req.body;
    try {

        const finduser = await User.findOne({email: email});
        if(!finduser){
           return res.status(400).json({message: 'User not found'});
        } 

        const matchpassword = await bcrypt.compare(password, finduser.password);
             
        if(!matchpassword){
            return res.status(200).json({message: 'Password incorrect'});
        }

        const token= jwt.sign({id:finduser._id},process.env.JWT_SECRET,{expiresIn:"1d"});

        res.status(200).json({username:finduser.name,success:true,message:'login successful',token:token});
        

           
        
    } catch (error) {
        res.status(500).send({message: `Error in Login: ${error.message}`});
    }


}

const registerUser = async(req,res)=>{

    const {name,email,password}= req.body;

    try {
        const existingUser = await User.findOne({email});

        // Hash the password asynchronously and ensure it's awaited
        const hashpassword = await bcrypt.hash(password,10);

        if(existingUser){
            return res.status(400).send({message: 'User Already Exist',success:false});
        }

       
        const user = await User.create({
            name,
            email,
            password:hashpassword,
        }); 

        if(user){
            return res.status(200).send({message:"user Created",success:true});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false,message: `Register Controller ${error.message}`});
        
    }

}

const authUser =async (req, res) => {
    // console.log(req,"LLG");
    try {
        const user = await User.findById({_id:req.body.userId});
        // console.log(user,"user")
        if(!user){
            return res.status(200).send({message:"user not found",success:false}); 
        }else{
            res.status(200).send({success:true,
                data:{
                    name:user.name,
                    email:user.email,
                    role: {
                        isAdmin: user.isAdmin,
                        isDoctor: user.isDoctor
                    },
            }});
        }
        
    } catch (error) {
        res.status(500).send({message:"authentication Failed",success:false,error});
    }
}


const applyDoctor =async(req,res)=>{
    try {

        res.send(res.body);
        
    } catch (error) {
        
    }
}

module.exports ={loginUser, registerUser,authUser,applyDoctor};

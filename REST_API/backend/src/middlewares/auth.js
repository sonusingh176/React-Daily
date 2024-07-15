const jwt = require('jsonwebtoken');
// console.log(jwt);

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;


const auth = (req,res,next)=>{
//console.log(req.headers);
     //console.log(req.user);
    // console.log(req.headers);
  const token = req.headers.authorization;
  if(!token){

    return res.status(401).json({status:401 , message:"Token not found"});
  }else{
    try {
        const decode=jwt.verify(token,PRIVATE_KEY)
        // console.log(decode);
        
        req.user = decode;//adding user property to request, with decode value.
       next();
        
    } catch (error) {
        return res.status(401).json({status:401 , message:"Token Invalid"});
    }
    next();
  }
  

}

module.exports ={auth};
const jwt= require('jsonwebtoken');


module.exports = async (req,res,next) => {

    try {
        const token = req.headers['authorization'].split(' ')[1];//split() splits a string into an array of substrings, and returns the array:
       
        if(!token){
            return res.status(401).json({status:401 , message:"Token not found"});
        }

        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                
                return res.status(200).send({
                    message: "Auth Failed",
                    success: false,
                })

            }else{
                req.body.userId =decode.id;
                next();
            }
        })
    } catch (error) {
        res.status(401).send({message:"Auth Failed",success:false});
    }

}

/**
 * split() splits a string into an array of substrings, and returns the array:
 * let text = "Bearer " + "xyz1239" ;
 * const myArray = text.split(" "); //Bearer,xyz1239
 * const myArray = text.split(" ")[1]; //xyz123
 */
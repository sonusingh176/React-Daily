import 'dotenv/config';
import jwt from 'jsonwebtoken';
  
  export const isAuthenticatedUser = (req, res, next) => {
 
    try {
         const token = req.cookies.token;

        //  console.log(token); 

         if(!token){
            return next(new Error('Please login to access this resource'));
        }

        const {payload} = jwt.verify(token, process.env.JWT_SECRET);
        //here we are set user in request object and assign payload to It.Now we can access payload data throught the application.

        req.user = payload;
        next(); 
        
    } catch (error) {
        next(error)
    }
  }
  

  //this is rest operator not spread operator
  export const isAuthorizedUser = (...roles) => {
    return (req, res, next) => {

      //accessing role from the request object. (we can set user in request object in line no 18 )
      if (!roles.includes(req.user.role)) {
          return next(new Error(`Role ${req.user.role} is not allowed to access this resource`))
      }
      next()
  }
  }
  
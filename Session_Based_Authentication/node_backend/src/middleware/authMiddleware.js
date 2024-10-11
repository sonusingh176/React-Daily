

const authMiddleware =(req,res,next) => {

    if(req.session && req.session.userId){
        
        next(); // User is authenticated, proceed to the next step
      
    }else{
        return res.status(401).json({ message: 'Unauthorized access' });
    }
};

module.exports = authMiddleware;
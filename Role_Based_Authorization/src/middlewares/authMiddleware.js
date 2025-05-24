const jwt = require("jsonwebtoken");


const verifyToken =(req,res,next)=>{
   
    let authHeader = req.headers.Authorization || req.headers.authorization;

    console.log(authHeader)
     // Check if token exists in header
     if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing or invalid." });
    }

    const token = authHeader.split(" ")[1];
    console.log(token)

    if(!token){
        return res.status.json({message:"No token , authorization denied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ensure JWT_SECRET is set in .env
        req.user = decoded; // optionally attach user info to req
        console.log(req.user)
        next(); // pass control to the next middleware
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }

}

module.exports=verifyToken;
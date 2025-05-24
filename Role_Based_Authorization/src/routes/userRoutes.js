const express =require("express");
const verifyToken =require("../middlewares/authMiddleware");
const authorizeRoles =require('../middlewares/roleMiddleware');
const router = express.Router();

// Only admin can access this router

 router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"welcome Admin"});
 })
// Both admin and manager can access this router

router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message:"welcome Manager"});
 })

// All can access this router
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message:"welcome User"});
 })


 module.exports=router;
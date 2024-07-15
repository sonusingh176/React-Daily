const express = require('express');
const route = express.Router();
const{addBlog,getBlog,getSingleBlog,deleteBlog,updateBlog} = require('../controller/blogController');
const {auth} =require('../middlewares/auth');
const multer =require('multer');

// file upload system using multer library
const storage = multer.diskStorage({
    //The folder to which the file has been saved
    destination:(req,file,cb)=>{
        //cb - callback
        cb(null,"uploads/")
    },
    //The name of the file within the destination
    filename:(req,file,cb)=>{
        cb(null, Date.now()+file.originalname);
    }
});

const uploads = multer({storage});



route.post('/add',uploads.single('photo'),auth,addBlog); //upload is middleware
route.get('/getAll',auth,getBlog);
route.get('/getSingle/:id', auth, getSingleBlog);
route.delete('/delete/:id' ,auth,deleteBlog);
route.put('/update/:id',uploads.single('photo'),auth,updateBlog);


module.exports = route;
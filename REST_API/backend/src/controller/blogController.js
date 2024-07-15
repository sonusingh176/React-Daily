const jwt = require('jsonwebtoken');
require('dotenv').config();
const blogModel = require('../models/blogModel');
const fs= require('fs');


const addBlog = (req,res)=>{
    const {title, description}=req.body;
    const filename =  req.file.filename;
    const obj={
        title: title,
        description: description,
        photo:filename,
    }
    console.log(obj);
    const blog = new blogModel(obj);
    //The `save()` function in Mongoose serves the purpose of persisting a document in the MongoDB database.
    //The `save()` function saving or creating a new document(table data) in the MongoDB database. 
    //we can use either `save()` or `create()`.
    blog.save();

    res.status(200).json({message:"Add Blog",blog:blog});

};

const getBlog = async(req,res)=>{

    try {
        const getallblogs=await blogModel.find(); //blogModel.find() is an asynchronous operation, and it should be awaited.
        
    // console.log(getallblogs);

        if(!getallblogs){
            res.status(400).json({message:"Blog not found"});
        }else{
            res.status(200).json({message:"get blog",getData:getallblogs});
        }
        
    } catch (error) {
        res.status(401).json({message:error.message});
    }

  
};

const getSingleBlog = async(req,res)=>{
    try {
        const id=req.params.id;
        const getBlog=await blogModel.find({_id:id});

        if(!getBlog) {
            res.status(400).json({message:"Blog not found"});
        }else{
            res.status(200).json({message:"Get Single Blog",getData:getBlog});
        }
        
    } catch (error) {
        res.status(401).json({message:error.message});
    }
    
   
};

const deleteBlog = async(req,res)=>{
   // const id=req.params.id;


    try {
        const getBlog = await blogModel.findById(req.params.id);
        
        if (!getBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if(getBlog){

            fs.unlink('uploads/'+getBlog.photo ,(err)=>{
                console.log('Failed to delete photo',err);
            } );

            await getBlog.deleteOne({_id:getBlog._id});
            res.status(200).json({ message: "Blog deleted successfully", blog: getBlog });

        }else{
            return  res.status(404).json({ message: "Blog not found" });
        }
     

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

   
};

const updateBlog = async(req,res)=>{
    console.log(req.body);
    const {title,description} = req.body;
    
   const id= req.params.id;

   const obj ={
    title:title,
    description:description
   }
  

   if(req.file !== undefined){
    obj.photo = req.file.filename;
    const getFiledata = await blogModel.find({_id:id});
    //  console.log(getFiledata);
    await fs.unlink('uploads/'+getFiledata[0].photo , (err) =>{
        console.log(err);
    });
   }

   console.log(obj);

    try {
        const UpdateNewBlog =await blogModel.findByIdAndUpdate(id,obj);

        res.status(200).json({message:"Update Blog" , blog:UpdateNewBlog});
        
    } catch (error) {
        res.status(401).json({message:error.message});
    }
    
};   


module.exports ={addBlog, getBlog, getSingleBlog, deleteBlog, updateBlog}
import mongoose from "mongoose";
const { Schema } = mongoose;


const userSchema = new Schema({
    fullName:{
        type:String,
        required:[true, 'Please provide the full name']
    },
    userName:{
        type:String,
        required:[true, 'Please provide the username'],
        unique:true
    },
    email:{
        type:String,
        required:[true, 'Please provide the email'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Please provide the password'],
        trim: true,
    },
    avatar:{secure_url:String, public_id:String},
    role:{
        type:String,
        default:'user',
        enum:['user', 'admin', 'editor']
    }
},{
    timestamps:true
})



const User = mongoose.model('user', userSchema);
export default User;
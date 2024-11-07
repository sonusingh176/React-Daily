const mongoose = require('mongoose');

const {Schema} = mongoose;

//schema definition
const userSchema = new Schema({
    name:{
        type: String,
        required: [true,'name is required'],
    },

    email:{
        type: String,
        required: [true,'email is required'],
    },

    password:{
        type: String,
        required: [true,'password is required'],
    },
});

//Creating a model
const userModel = mongoose.model("Users",userSchema);

module.exports = userModel;


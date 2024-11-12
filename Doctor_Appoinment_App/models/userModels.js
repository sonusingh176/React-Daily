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
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isDoctor:{
        type: Boolean,
        default: false,
    },
    notification:{
        type:Array,
        default: [],
    },
    seennotification:{
        type: Array,
        default: [],
    }

});

//Creating a model
const userModel = mongoose.model("Users",userSchema);

module.exports = userModel;


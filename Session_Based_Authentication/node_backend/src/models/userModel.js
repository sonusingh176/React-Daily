const  mongoose = require( 'mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

   name:{
    type: 'string',
    required: true,
   },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

//To use this schema,we need to convert our userSchema into Model .
const User =mongoose.model('User',userSchema);

//now export this User Model.
module.exports = User; 


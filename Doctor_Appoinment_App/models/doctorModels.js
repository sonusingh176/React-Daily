import mongoose from 'mongoose';
const { Schema } = mongoose;

const doctorSchema = new Schema({

    userId:{
        type:String,
    },
    firstName:{
        type:String,
        required:[true,'firstName is required'],
    },
    lastName:{
        type:String,
        required:[true,'lastName is required'],
    },
    phone:{
        type:String,
        required:[true,'Phone is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'address is required'],
    },
    specialization:{
        type:String,
        required:[true,'specialization is required'],
    },
    experience:{
        type:String,
        required:[true,'experience is required'],
    },
    feesPerCunsalation:{
        type:Number,
        required:[true,'Fees is required'],
    },
    timing:{
        type:Object,
        required:[true,'working timing is required']
    }


},{timestamps:true});

//Creating a model
const  doctorsModel = mongoose.model('Doctor', doctorSchema);


module.exports = doctorsModel;


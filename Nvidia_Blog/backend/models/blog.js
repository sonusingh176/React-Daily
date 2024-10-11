const mongoose = require('mongoose');

const {Schema} =mongoose;

const blogSchema = new Schema({
    title:{type:String , required:true},
    content:{type:String , required:true},
    photoPath:{type:String , required:true},
    author:{type:mongoose.SchemaType.ObjectId , ref:'users'}
},
{timestamps:true}
);

/**
 * type:The type field in a schema defines the data type of a particular property or field.
 * 
 * Explanation of author:{type:mongoose.SchemaType.ObjectId , ref:'users'}
 * ---  This part of the schema defines a relationship between the Blog model and the User model.
 * ---  type:mongoose.SchemaType.ObjectId: Specifies that the author field will store an ObjectId,
 *      which is the unique identifier of a MongoDB document.
 * 
 * ---  ref:'users': Indicates that this ObjectId references a document in the users collection.
 */
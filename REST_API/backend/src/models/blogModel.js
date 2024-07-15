const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:String,
    description:String,
    photo:String,

});

//When you call mongoose.model() on a schema, It will create a collection (table) on database.
//The name of the collection created by the model() function is always in plural form. 
//This function accepts the following two parameters: 1.Collection name  2. Collection Schema

module.exports = mongoose.model('blog',blogSchema);
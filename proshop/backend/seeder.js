import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from "./data/users.js";
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';


dotenv.config();
connectDB();

const importData = async () =>{
    try {
        
        //These lines ensure that all existing documents in the Order, Product, and User collections are deleted before importing new data.
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        //Inserts multiple documents into the collection(User) at once.
        const createUsers =await User.insertMany(users);
        //retrieves the ID of the first user (assumed to be an admin).
        const adminUser =createUsers[0]._id;

        const sampleProducts = products.map((product) =>{
            return {...product, user:adminUser};
        });

        //This inserts the updated product data (which includes the user field) into the Product collection.
        await Product.insertMany(sampleProducts);
        console.log('Data Imported'.green.inverse);

        process.exit();

    } catch (error) {

        console.log(`${error}`.red.inverse);
        process.exit(1);
        
    }
}


const destroyData = async () =>{
    try {

        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

/**
 * The script checks for a command-line argument to determine whether to import or destroy data:
 * we have already write script in package.json for this :
 *              "data:import":"node backend/server.js",
 *              "data:destroy":"node backend/server.js -d"

*/
if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}

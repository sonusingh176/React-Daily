import asyncHandler from "../middleware/asyncHandler.js"
import Product from '../models/productModel.js';


// @desc Fetches the product
//@route GET /api/products
//@access Public
const getProducts =asyncHandler(async (req, res)=>{
    //when we need all the products, we just pass {} in find({});
    const products = await Product.find({});
    res.json(products);
})

// @desc Fetches a product
//@route GET /api/products/:id
//@access Public

const getProductById =asyncHandler(async (req, res)=>{
    const product= await Product.findById(req.params.id);
    if(product){
        return  res.json(product);
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
}) ;


export { getProductById, getProducts}

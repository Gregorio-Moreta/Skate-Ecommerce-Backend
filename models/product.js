///////////////////////////////
//  Import Dependencies
///////////////////////////////
const mongoose = require('./connection')

///////////////////////////////
//  Define Model
///////////////////////////////
//  Pull Schema and model from mongoose
const { Schema, model } = mongoose;

//  Make product Schema
const productSchema = new Schema(
    {
        name: String,
        price: Number,
        image: String,
        description: String,
        tag: String
    }
)

//  Make user model 
const Product = model("Product", productSchema);

///////////////////////////////
//  Export Model
///////////////////////////////
module.exports = Product















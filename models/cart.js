///////////////////////////////
//  Import Dependencies
///////////////////////////////
const mongoose = require('./connection')

///////////////////////////////
//  Define Model
///////////////////////////////
//  Pull Schema and model from mongoose
const { Schema, model } = mongoose;

//  Make user Schema
const CartSchema = new Schema(
    {
        fk: Product,
        fk: User,
        quantity: int
    }
)

//  Make user model 
const Cart = model("Cart", CartSchema);

///////////////////////////////
//  Export Model
///////////////////////////////
module.exports = Cart















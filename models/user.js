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
const userSchema = new Schema(
    {
        userName: {type: String, require: true, unique: true},
        passWord: {type: String, required: true},
        email: {type: String, required: true, unique: true}
    }
)

//  Make user model 
const User = model("User", userSchema);

///////////////////////////////
//  Export Model
///////////////////////////////
module.exports = User















///////////////////////////
// Import dependencies
///////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')


const mongoose = require('mongoose')

///////////////////////////////////////
//  Database Connection
///////////////////////////////////////
//  Setup inputts for our conenct function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//  Establish Conenction
mongoose.connect(DATABASE_URL, CONFIG)

//Events for when connection opens/disconnects/errors
mongoose.connection 
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconencted from Mongoose'))
.on('error', (error) => console.log(error))


////////////////////////////////////
//  Models
////////////////////////////////////
//  Pull Schema and model from mongoose
const {Schema, model} = mongoose

const productsSchema = new Schema(
    {
        name: String,
        price: Number,
        image: String,
        tag: String,
        description: String,
    },
);

const tagsSchema = new Schema(
    {
        tagName: String,
        productName: String,
    },
);

const Product = model("Product", productsSchema);
const Tag = model("Tag", tagsSchema); 

app.get("/products/seed", (req, res) => {

    const startProducts = [
        { name: "Skateboard", price: 120, image: "https://images.unsplash.com/photo-1596566940070-3610b139a092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNrYXRlYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", tag: "Skateboard", description: "Something you do tricks or ride on" },
        { name: "Shirt", price: 20, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", tag: "Shirt", description: "A shirt you can wear" },
        { name: "Helmet", price: 40, image: "https://images.unsplash.com/photo-1617341173766-24d1790c5c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2thdGUlMjBoZWxtZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", tag: "Helmet", description: " Wear this to protect your head!" },
        { name: "Hat", price: 45, image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", tag: "Hat", description: "Wear on head" },
        { name: "Knee brace", price: 30, image: "https://images.unsplash.com/photo-1515349541556-ef8cc276e382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a25lZSUyMGJyYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", tag: "Knee brace", description: "Wear this to protect your knees" },
    ]

    Product.remove({}, (err, data) => {
        Product.create(startProducts, (err, data) => {
            res.json(data);
        }
        );
    });
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("fruits/index.ejs", { products });
});

app.get("/", (req, res) => {
    res.send("your server is running... better catch it.")
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))







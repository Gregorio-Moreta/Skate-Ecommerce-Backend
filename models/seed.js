///////////////////////////
// Import dependencies
///////////////////////////
const express = require('express')
const mongoose = require('./connection')
const product = require('../models/product')
const Product = require('../models/product')

///////////////////////////
// Seed Code
///////////////////////////
// Make sure code is not run until connected
mongoose.connection.on('open', () => {
    // Seed code below
    const startProducts = [
        {
        name: "Mullen", 
        price: 50, 
        image: 'https://www.tactics.com/a/deoi/1b/almost-most-85-hybrid-maple-skateboard-deck.webp', 
        description: 'Rodney Mullen Specs!', 
        tag: 'Almost'
    },
    {
        name: "Sheckler", 
        price: 60, 
        image: 'https://media.rainpos.com/3976/1563907813980_1dplnsheamc80rw.png', 
        description: 'Ryan Sheckler Specs!', 
        tag: 'Plan B'
    },
    {
        name: "Vallely", 
        price: 70, 
        image: 'https://cdn.shopify.com/s/files/1/1588/0411/products/unnamed_1_edbcda40-551b-47a1-b3c2-fabb4c61df19_540x.jpg?v=1633461105', 
        description: 'Mike Vallely Specs!', 
        tag: 'Element'
    },
    {
        name: "Song", 
        price: 80, 
        image: 'https://www.nativeskatestore.co.uk/images/daewon-song-rice-burner-skateboard-deck-8-375-p38857-96056_zoom.jpg', 
        description: 'Rodney Mullen Specs!', 
        tag: 'Almost'
    },
    {
        name: "Hawk", 
        price: 90, 
        image: 'https://whscdn.warehouseskateboards.com/images/products/preview/1DBIRHAWFL48200.jpg', 
        description: 'Tony Hawk Specs!', 
        tag: 'Birdhouse'
    },
    ]

    // Delete all products
    Product.deleteMany({}, (err, data) => {
        // Seed starter products
        Product.create(startProducts, (err, data) => {

        // Log the create products confirmation message
        console.log('PRODUCTS CREATED')
        console.log(data)
        console.log('PRODUCTS CREATED')
        
        // Close the DB connection
        mongoose.connection.close()
    })
    })
})









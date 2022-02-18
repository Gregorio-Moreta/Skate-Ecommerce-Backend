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
        description: 'Rodney Mullen Specs!', tag: 'Almost'
    },
    {
        name: "Mullen", 
        price: 50, 
        image: 'https://www.tactics.com/a/deoi/1b/almost-most-85-hybrid-maple-skateboard-deck.webp', 
        description: 'Rodney Mullen Specs!', tag: 'Almost'
    },
    {
        name: "Mullen", 
        price: 50, 
        image: 'https://www.tactics.com/a/deoi/1b/almost-most-85-hybrid-maple-skateboard-deck.webp', 
        description: 'Rodney Mullen Specs!', tag: 'Almost'
    },
    {
        name: "Mullen", 
        price: 50, 
        image: 'https://www.tactics.com/a/deoi/1b/almost-most-85-hybrid-maple-skateboard-deck.webp', 
        description: 'Rodney Mullen Specs!', tag: 'Almost'
    },
    {
        name: "Mullen", 
        price: 50, 
        image: 'https://www.tactics.com/a/deoi/1b/almost-most-85-hybrid-maple-skateboard-deck.webp', 
        description: 'Rodney Mullen Specs!', tag: 'Almost'
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









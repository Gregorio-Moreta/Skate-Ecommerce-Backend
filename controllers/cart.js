///////////////////////////
// Import dependencies
///////////////////////////
const express = require('express')
const Cart = require('../models/cart')

///////////////////////////
// Create Route
///////////////////////////
const router = express.Router()

///////////////////////////
// Routes
///////////////////////////

router.get('/cart/', (req, res) => {
    res.send('THIS IS THE CART CONTROLLER ROUTES WORKING INDEX PAGE')
})


//  
// router.get()








///////////////////////////
// Exxport the Router
///////////////////////////

module.exports = router



















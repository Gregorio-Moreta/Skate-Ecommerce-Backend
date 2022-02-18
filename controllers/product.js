///////////////////////////
// Import dependencies
///////////////////////////
const express = require('express')
const Product = require('../models/product')

///////////////////////////
// Create Route
///////////////////////////
const router = express.Router()

///////////////////////////
// Routes
///////////////////////////


router.get('/api/product', async (req, res) => {
    try {
        res.json(await Product.find({}))
    } catch(error) {
        res.status(400).json({error})
    }
})


///////////////////////////
// Export the Router
///////////////////////////

module.exports = router









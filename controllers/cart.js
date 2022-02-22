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

router.get('/carts/', (req, res) => {
    res.send('THIS IS THE CART CONTROLLER ROUTES WORKING INDEX PAGE')
})


 // Cart Index route Get request for all carts
router.get('/cart', async (req, res) => {
    try{
        res.json(await Cart.find({}))
    } catch(error) {
        res.status(400).json({error})
    }
})

// Cart create route POST request for making carts
router.post('/cart', async (req, res) => {
    try {
        res.json(await Cart.create(req.body))
        console.log(req.body)
    } catch(error) {
        res.status(400).json({error})
    }
})

// Cart update route PUT request for updating carts
router.put('/cart/:id', async (req, res) => {
    try {
        res.json(
            await Cart.findByIdAndUpdate(res.params.id, req.body, {new:true},
                console.log(req.params.id),
                console.log(req.body)
            )
        )
    } catch(error){
        res.status(400).json({error})
        console.log(error)
    }
})

// Destroy route DELETE request to cart/:id
router.delete('/cart/:id', async (req, res) => {
    try {
        res.json(await Cart.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json({error})
        console.log(error)
    }
})



///////////////////////////
// Exxport the Router
///////////////////////////

module.exports = router



















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

router.get('/', (req, res) => {
    res.send('app is running correctly')
})

// Product index route GET request for all products
router.get('/product', async (req, res) => {
    try {
        res.json(await Product.find({}))
    } catch(error) {
        res.status(400).json({error})
    }
})

// Product create route POST request for making products
router.post('/product', async (req, res) => {
    try {
        res.json(await Product.create(req.body))
        console.log(req.body)
    } catch(error) {
        res.status(400).json({error})
    }
})

// Product update Route PUT request for updating products
router.put('/product/:id', async (req, res) => {
    try{
        res.json(
            await Product.findByIdAndUpdate(req.params.id, req.body, {new:true},
                console.log(req.params.id),

                console.log(req.body)
            )
        )
    } catch(error){
        res.status(400).json({error})
        console.log(error)
        
    }
})

//  Destroy route delete request to product/id
router.delete('/product/:id', async (req, res) => {
    try {
        res.json(await Product.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json({error})
        console.log(error)

    }
})

///////////////////////////
// Export the Router
///////////////////////////

module.exports = router









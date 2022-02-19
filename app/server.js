///////////////////////////
// Import dependencies
///////////////////////////
//  Load Env Variables
require('dotenv').config()
//  Import Express
const express = require('express')
//  Import middleware
const middleware = require('../utils/middleware')
// const Product = require('../models/product')



const app = express()

middleware(app)

///////////////////////////
// Routes
///////////////////////////

// app.get('/', (req, res) => {
//     res.send('app is running correctly')
// })

// // Product index route GET request for all products
// app.get('/product', async (req, res) => {
//     try {
//         res.json(await Product.find({}))
//     } catch(error) {
//         res.status(400).json({error})
//     }
// })

// // Product create route POST request for making products
// app.post('/product', async (req, res) => {
//     try {
//         res.json(await Product.create(req.body))
//         console.log(req.body)
//     } catch(error) {
//         res.status(400).json({error})
//     }
// })

// // Product update Route PUT request for updating products
// app.put('/product/:id', async (req, res) => {
//     try{
//         res.json(
//             await Product.findByIdAndUpdate(req.params.id, req.body, {new:true},
//                 console.log(req.params.id),

//                 console.log(req.body)
//             )
//         )
//     } catch(error){
//         res.status(400).json({error})
//         console.log(error)
        
//     }
// })

// //  Destroy route delete request to product/id
// app.delete('/product/:id', async (req, res) => {
//     try {
//         res.json(await Product.findByIdAndRemove(req.params.id))
//     } catch (error) {
//         res.status(400).json({error})
//         console.log(error)

//     }
// })








// app.get('/product', (req, res) => {
//     res.send('Product')
// })

// app.get('/product', async (req, res) => {
//     const products = await Product.find({})
//     res.render({products})
// })

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on ${PORT}`))








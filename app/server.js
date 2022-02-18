///////////////////////////
// Import dependencies
///////////////////////////
//  Load Env Variables
require('dotenv').config()
//  Import Express
const express = require('express')
//  Import middleware
const middleware = require('../utils/middleware')

const app = express()

middleware(app)


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on ${PORT}`))








///////////////////////////
// Import dependencies
///////////////////////////
//  Load Env Variables
require('dotenv').config()
//  Import Mongoose
const mongoose = require('mongoose')


///////////////////////////////////////
//  Database Connection
///////////////////////////////////////
//  Setup inputts for our conenct function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

//  Establish Conenction
mongoose.connect(DATABASE_URL, CONFIG)

//Events for when connection opens/disconnects/errors
mongoose.connection 
.on('open', () => console.log('Connected to Mongo'))
.on('close', () => console.log('Disconencted from Mongo'))
.on('error', (error) => console.log(error))

///////////////////////////////////////
//  Export Connection
///////////////////////////////////////

module.exports = mongoose
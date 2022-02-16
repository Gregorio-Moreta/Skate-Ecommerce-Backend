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
    useUnifiedTopology: true
}

//  Establish Conenction
mongoose.connect(DATABASE_URL, CONFIG)

//Events for when connection opens/disconnects/errors
mongoose.connection 
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconencted from Mongoose'))
.on('error', (error) => console.log(error))

///////////////////////////////////////
//  Export Connection
///////////////////////////////////////

module.export = mongoose
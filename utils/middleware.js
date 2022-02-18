///////////////////////////////////////
//  Import Depencies
///////////////////////////////////////
require('dotenv').config()      //  Load ENV variables
const express = require('express')      //  Import Express
const morgan = require('morgan')        //  Import morgan
const methodOverride = require('method-override')       //  Import method-override
const session = require('express-session')      //  Express sessions cookies
const MongoStore = require('connect-mongo')     //  Stores the data in mongo so it can't be easily deleted  in heroku temporary storage


///////////////////////////////////////
//  Middleware Function
///////////////////////////////////////
const middleware = (app) => {
    app.use(morgan('tiny'))    // Logging
    app.use(methodOverride('_method'))     // Override for PUT and DELETE request from forms
    app.use(express.urlencoded({extended: true}))   // Parse urlencoded request bodies
    app.use(express.static('public'))   // Serve files from public statically
    app.use(session({
        secret: process.env.SECRET, 
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false
    }))
}

module.exports = middleware















'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error in Connecting to the Database: ${err}`)
    }
    console.log('Connection to the Established Database...');

    app.listen (config.port, () => {
        console.log(`Api Rest Run in http://localhost:${config.port}`);        
    })    
})

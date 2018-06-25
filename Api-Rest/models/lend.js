'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = mongoose.model('Book');

const LendSchema = Schema({
    name: String,
    today: Date,
    returnday: Date,    
    book: { type: Schema.ObjectId, ref: "Book" } 
})

module.exports = mongoose.model('Lend', LendSchema)

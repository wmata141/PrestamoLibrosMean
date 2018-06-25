'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({
    title: String,
    languaje: String,
    editorial: String,
    state: { type: String, default: "active" },
    picture: String
})

module.exports = mongoose.model('Book', BookSchema)

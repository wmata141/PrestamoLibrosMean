'use strict'

const express = require('express')
const bookCtrl = require('../controllers/book')
const lendCtrl = require('../controllers/lend')

const api = express.Router()

api.get('/book', bookCtrl.getBooks)
api.get('/book/:id', bookCtrl.getBook)
api.post('/book', bookCtrl.saveBook)
api.put('/book/:id', bookCtrl.updateBook)
api.delete('/book/:id', bookCtrl.deleteBook)

api.get('/lend', lendCtrl.getLends)
api.get('/lend/:id', lendCtrl.getLend)
api.post('/lend', lendCtrl.saveLend)
api.put('/lend/:id', lendCtrl.updateLend)
api.delete('/lend/:id', lendCtrl.deleteLend)

module.exports = api
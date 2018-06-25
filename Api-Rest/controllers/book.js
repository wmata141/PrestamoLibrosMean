'use strict'

const express = require('express');
const router = express.Router();
const bookModel = require('../models/book');

//All Books
function getBooks (req, res) {
    bookModel.find({}, (err, books) => {
        if(err) return res.status(500).send({message: `Error making the request: ${err}`})
        if(!books) return res.status(404).send({message: `Book does not exist`})
        
        res.status(200).send( books )
    })  
}
//Book for id
function getBook (req, res) {
    let id = req.params.id 
    bookModel.findById(id, (err, book) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`})
        if (!book) return res.status(404).send({message: `The book does not exist`})          
        
        res.status(200).send( book )
    })
}
//Insert Book
function saveBook (req, res) {    

    let book = new bookModel()
    book.title = req.body.title
    book.languaje = req.body.languaje
    book.editorial = req.body.editorial
    book.state = req.body.state
    book.picture = req.body.picture

    book.save((err, book) => {
        if (err) {
            res.status(500).send({message: `Error when saving in the database: ${err}`})
        }
        res.status(200).send( book )
    })
}
//Modificar Book por Id
function updateBook (req, res) {
    let id = req.params.id 
    let update = req.body
    bookModel.findByIdAndUpdate(id, update, (err, bookUpdate) => {
        if (err) {
            res.status(500).send({message: `Error when updating in the database: ${err}`})
        }            
        res.status(200).send( bookUpdate )                                   
    })
}
//Eliminar Book por Id
function deleteBook (req, res) {
    let id = req.params.id 
    bookModel.findById(id, (err, book) => {
        if (err) {
            res.status(500).send({message: `Error when deleting the book: ${err}`})
        }
        book.remove(err => {
            if(err) res.status(404).send({message: `Book does not exist`})
            res.status(200).send({ message: "The book has been deleted" })
        })                             
    })
}

module.exports = {
    getBooks,
    getBook,
    saveBook,
    updateBook,
    deleteBook
}
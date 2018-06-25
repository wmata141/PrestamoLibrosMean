'use strict'

const express = require('express');
const router = express.Router();
const lendModel = require('../models/lend');
const bookModel = require('../models/book');

//All Lends
function getLends (req, res) {
    lendModel.find({}, (err, lends) => {
        if(err) return res.status(500).send({message: `Error making the request: ${err}`})
        if(!lends) return res.status(404).send({message: `Lend does not exist`})
        
        bookModel.populate(lends, {path: "book"},function(err, lends){
        	res.status(200).send( lends )
        });         
    })  
}
//Lend for id
function getLend (req, res) {
    let id = req.params.id 
    lendModel.findById(id, (err, lend) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`})
        if (!lend) return res.status(404).send({message: `The lend does not exist`})          
        
        res.status(200).send( lend )
    })
}
//Insert Lend
function saveLend (req, res) {    
    let lend = new lendModel()
    lend.name = req.body.name
    lend.today = req.body.today
    lend.returnday = req.body.returnday
    lend.book = req.body.book

    let id = lend.book 

    lend.save((err, lend) => {
        if (err) return res.status(500).send({message: `Error when saving in the database: ${err}`})

        bookModel.findById(id, (err, book) => {
            if (err) return res.status(500).send({message: `Error making the request: ${err}`})
            if (!book) return res.status(404).send({message: `The book does not exist`})          
            
            bookModel.findByIdAndUpdate(id, book, (err, lendUpdate) => {
                console.log("modificando")
                if (err) {
                    res.status(500).send({message: `Error when updating in the database: ${err}`})
                }     
                console.log(lendUpdate)       
                res.status(200).send( lendUpdate )                                   
            })
        })
    })
}
//Modificar Lend por Id
function updateLend (req, res) {
    let id = req.params.id 
    let update = req.body
    lendModel.findByIdAndUpdate(id, update, (err, lendUpdate) => {
        if (err) {
            res.status(500).send({message: `Error when updating in the database: ${err}`})
        }            
        res.status(200).send( lendUpdate )                                   
    })
}
//Eliminar Lend por Id
function deleteLend (req, res) {
    let id = req.params.id 
    lendModel.findById(id, (err, lend) => {
        if (err) {
            res.status(500).send({message: `Error when deleting the lend: ${err}`})
        }
        lend.remove(err => {
            if(err) res.status(404).send({message: `Lend does not exist`})
            res.status(200).send({ message: "The lend has been deleted" })
        })                             
    })
}

module.exports = {
    getLends,
    getLend,
    saveLend,
    updateLend,
    deleteLend
}
//const { response } = require("express");
const { response } = require("express");
const Book = require("../models/Book");

const multer = require('multer')
const path = require('path');
const fs = require("fs");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, images_folder)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})
const upload = multer({storage: storage}).single('file');

exports.createBook = async (req,res) => {
    try{
        let booki;

        //crear nuestro libro
        booki = new Book(req.body);
        await booki.save();
        res.send(booki);
    }catch(error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.getBooks = async (req,res) => {
    try{
        const books = await Book.find();
        res.json(books);

    }catch(error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}



exports.updateBook = async (req,res) => {
    try{
        const {title,author,editorial,price,image} = req.body;
        let book = await Book.findById(req.params.id);

        if(!book){
            res.status(404).json({msg: "No existe el libro"});
        }

        book.title = title;
        book.author = author;
        book.editorial = editorial;
        book.price = price;
        book.image = image;

        book = await Book.findOneAndUpdate({_id: req.params.id}, book,{new:true});
        res.json(book);

    }catch(error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}


exports.getBook = async (req,res) => {
    try{
        let book = await Book.findById(req.params.id);

        if(!book){
            res.status(404).json({msg: "No existe el libro"});
        }

        res.json(book);
    }catch(error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}


exports.deleteBook = async (req,res) => {
    try{
        let book = await Book.findById(req.params.id);

        if(!book){
            res.status(404).json({msg: "No existe el libro"});
        }

        await Book.findOneAndRemove({_id: req.params.id});
        res.json({msg: "Libro eliminado"});
        

    }catch(error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}
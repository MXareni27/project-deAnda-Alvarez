const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateCreation:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('book', BookSchema);
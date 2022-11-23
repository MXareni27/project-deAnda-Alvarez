const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

var dba = "mongodb://localhost:27017/bookdb";

//var dba = "mongodb+srv://tomas:admin123@cluster0.wtclb.mongodb.net/books";
const connectDB = async () => {
    try{
        await mongoose.connect(dba, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connect db');
    }catch(error){
        console.log(error);
        process.exit(1); //stop app
    }
}

module.exports=connectDB;
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//Creacion del servidor
const app = express();

//Conectamos a la base de datos
connectDB();
app.use(cors());

app.use(express.json());
app.use(express.static("public"));
//Definicion de ruta principal
app.use('/books', require('./routes/book'));



app.listen(4000, () => {
    console.log('El servidor correcto');
});
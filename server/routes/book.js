// Rutas para los libros
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// api/books

router.post('/', bookController.createBook);
router.get('/', bookController.getBooks);
router.put('/:id', bookController.updateBook);
router.get('/:id', bookController.getBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
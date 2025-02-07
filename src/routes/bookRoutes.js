const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/', bookController.getBooks);

// Add other routes if necessary
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;

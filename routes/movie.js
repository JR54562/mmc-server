const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.movies.getAllMovies); // get all movies
router.post('/', ctrl.movies.addMovie); // add new movie
router.get('/show', ctrl.movies.showMovie); // show new movie
router.delete('/:id', ctrl.movies.deleteMovie); //delete movie


module.exports = router;
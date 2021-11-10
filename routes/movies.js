const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/new', ctrl.movie.renderNew);
router.get('/', ctrl.movie.index);
router.get('/:index', ctrl.movie.show);
router.post('/', ctrl.movie.postmovie);
router.get('/:index/edit', ctrl.movie.renderEdit);
router.put('/:index', ctrl.movie.editmovie);


module.exports = router;
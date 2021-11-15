const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/new', ctrl.movies.renderNew);
router.get('/', ctrl.movies.index);
router.get('/:index', ctrl.movies.show);
router.post('/', ctrl.movies.postmovie);
// router.get('/:index/edit', ctrl.movies.renderEdit);
// router.put('/:index', ctrl.movies.editMovie);


module.exports = router;
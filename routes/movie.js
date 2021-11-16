const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/new', ctrl.movies.renderNew);
router.get('/', ctrl.movies.index);
router.get('/:index', ctrl.movies.show);
router.post('/', ctrl.movies.postmovie);



module.exports = router;
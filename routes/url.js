const express = require('express');

const urlController = require('../controllers/urlController')

const router = express.Router();

router.post('/shortener', urlController.post);

router.get('/:id', urlController.get);


module.exports = router;
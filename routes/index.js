const express = require('express');
const router = express.Router();
const index_model = require('../models/index-model');

router.get('/', index_model.get);   // GET home page.
router.post('/', index_model.post); // POST home listing.

module.exports = router;

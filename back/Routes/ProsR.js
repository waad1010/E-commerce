const express = require('express');
const prosc = require('../Controllers/ProsC');
const router = express.Router();

router.get('/all' , prosc.getPros);

module.exports = router;
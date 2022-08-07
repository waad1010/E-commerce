const express = require('express');
const catsC = require('../Controllers/CatsC');
const router = express.Router();


router.get('/' ,catsC.getCats);

module.exports = router;
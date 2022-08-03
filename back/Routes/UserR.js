const express = require('express');
const userC = require('../Controllers/UserC');
const router = express.Router();

//router.get('/ok' , userC.getall);
router.post('/signup' , userC.save);
router.post('/signin' ,userC.Login);

module.exports = router;
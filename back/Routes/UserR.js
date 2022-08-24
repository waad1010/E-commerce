const express = require('express');
const userC = require('../Controllers/UserC');
const router = express.Router();

router.get('/allusers' , userC.getall);
router.get('/getlast' , userC.getLast);
router.post('/signup' , userC.save);
router.post('/signin' ,userC.Login);

module.exports = router;
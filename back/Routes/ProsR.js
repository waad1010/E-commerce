const express = require('express');
const prosc = require('../Controllers/ProsC');
const router = express.Router();

router.get('/all' , prosc.getPros);
router.get('/product/:id' ,prosc.Specpro);
router.put('/product/:id' ,prosc.Updatepro);
    
module.exports = router;
const express = require('express');
const prosc = require('../Controllers/ProsC');
const router = express.Router();

router.get('/all' , prosc.getPros);
router.get('/product/:id' ,prosc.Specpro);
router.post('/addprod' ,  prosc.createProd);
router.put('/product/:id' ,prosc.Updatepro);
router.delete('/products/:id' ,prosc.DeleteProd );
    
module.exports = router;
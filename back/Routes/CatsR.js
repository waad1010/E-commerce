const express = require('express');
const catsC = require('../Controllers/CatsC');
const router = express.Router();


router.get('/allcats' ,catsC.getCats);
router.post('/addcategory' ,catsC.createCat);
router.delete('/cats/:id' , catsC.DeleteCat);
// router.put('/comments/:id' , CommentC.EditComment);
module.exports = router;
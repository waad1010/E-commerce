const express = require('express');
const CommentC = require('../Controllers/CommentsC');
const router = express.Router();

router.get('/product/:id/comments' , CommentC.getComments);
router.post('/product/:id' , CommentC.saveComment);

module.exports = router;
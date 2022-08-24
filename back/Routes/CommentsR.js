const express = require('express');
const CommentC = require('../Controllers/CommentsC');
const router = express.Router();

router.get('/comments/:id' , CommentC.getComments);
router.post('/comments/:id' , CommentC.saveComment);
router.delete('/comments/:id' , CommentC.DeleteComment);
router.put('/comments/:id' , CommentC.EditComment);

module.exports = router;
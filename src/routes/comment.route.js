const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const validateComment = require('../validations/comment.validation');


//댓글 생성
router.post('/', validateComment, commentController.createComment)
//댓글 목록 조회
router.get('/:postId', commentController.getAllComments);
//댓글 수정
router.update('/:id', commentController.updateComment);
//댓글 삭제
router.delete('/:id', commentController.deleteComment);

module.exports = router;

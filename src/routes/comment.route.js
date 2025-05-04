const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const validateComment = require('../validations/comment.validation');
//게시글 생성
router.post('/', validateComment, commentController.createComment)
//게시글 목록 조회
router.get('/', commentController.getAllComments);
//게시글 수정
router.update('/:id', commentController.updateComment);
//게시글 삭제
router.delete('/:id', commentController.deleteComment);

module.exports = router;

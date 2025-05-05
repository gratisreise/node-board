const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const validatePost = require('../validations/post.validation');


//게시글 생성
router.post('/', validatePost, postController.createPost)
//게시글 목록 조회
router.get('/', postController.getAllPosts);
//게시글조회
router.get('/:id', postController.getPost);
//게시글 수정
router.update('/:id', postController.updatePost);
//게시글 삭제
router.delete('/:id', postController.deletePost);

module.exports = router;

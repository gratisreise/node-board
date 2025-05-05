const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validateUser = require('../validations/user.validation');


//유저 생성
router.post('/', validateUser, userController.createUser)
//유저 조회
router.get('/:id', userController.getUser);
//유저 수정
router.update('/:id', userController.updateUser);
//유저 삭제
router.delete('/:id', userController.deleteUser);

module.exports = router;

const userService = require('../services/user.service');
const responseService = require('../services/response.service')

//유저 생성
exports.createUser = async (req, res) => {
    await userService.createUser(req.body);
    res.json(responseService.getResult());
}

//유저정보조회
exports.getUser = async (req, res) => {
    const user = userService.getUser(req.params.id);
    res.json(responseService.getDataResult(user))
}

//유저수정
exports.updateUser = async (req, res) => {
    id = req.params.id;
    userUpdate = req.body;
    await userService.updateUser(id, userUpdate);
    res.json(responseService.getResult());
}

//유저 삭제
exports.deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json(responseService.getResult());
}
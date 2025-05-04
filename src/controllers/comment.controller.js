const commentService = require('../services/comment.service');
const responseService = require('../services/response.service')

//댓글 생성
exports.createComment = async (req, res) => {
    const comment = await commentService.createComment(req.body);
    res.status(200).json(responseService.getResult())
}

//댓글목록조회
exports.getAllComments = async (req, res) => {
    const comments = await commentService.getAllComments(req.params.id)
    res.status(200).json(responseService.getDataResult(comments))
}

//댓글수정 
exports.updateComment = async (req, res) => {
    postId = req.params.id;
    updateComment = req.body;
    await commentService.updateComment(postId, updateComment)
    res.status(200).json(responseService.getResult);
}

//댓글삭제
exports.deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
};
exports.deleteComment = async (req, res) => {

}

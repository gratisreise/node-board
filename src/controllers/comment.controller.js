const commentService = require('../services/comment.service');
const responseService = require('../services/response.service')

//댓글 생성
exports.createComment = async (req, res) => {
    const comment = await commentService.createComment(req.body);
    res.json(responseService.getResult())
}

//댓글목록조회
exports.getAllComments = async (req, res) => {
    const comments = await commentService.getAllComments(req.params.postId)
    res.json(responseService.getDataResult(comments))
}

//댓글수정 
exports.updateComment = async (req, res) => {
    postId = req.params.id;
    updateComment = req.body;
    await commentService.updateComment(postId, updateComment)
    res.json(responseService.getResult());
}

//댓글삭제
exports.deleteComment = async (req, res) => {
    await commentService.deleteUser(req.params.id);
    res.json(responseService.getResult())
}

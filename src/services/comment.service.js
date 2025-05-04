//모델가져오기
const Comment = require('../models/comment.model')


//댓글생성
exports.createComment = async (commentData) => {
    const comment = new Comment(commentData);
    await comment.save();
}

//댓글목록조회
exports.getAllComments = async (id) => {
    const comments = Comment.find({ postId: id });
    return comments;
}

//댓글수정
exports.updateComment = async (id, updateData) => {
    await Comment.findByIdAndUpdate(id, updateData);
}

//댓글삭제
exports.deleteComment = async (id) => {
    await Comment.findByIdAndDelete(id);
}
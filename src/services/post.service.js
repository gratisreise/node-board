//모델가져오기
const Post = require('../models/post.model')

//게시글 생성
exports.createPost = async (postData) => {
    const post = new Post(postData);
    await post.save();
}

//댓글목록조회 pagnation
exports.getAllComments = async (postId) => {
    const comments = Comment.findByPostId(postId);
    return comments;
}

exports.getAllPosts = async () => {
    const posts = Post.find();
    return posts
}

//게시글 수정
exports.updateComment = async (id, updateData) => {
    await Comment.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
}
exports.updatePost = async (id, postUpdate) => {
    await Post.findByIdAndUpdate(id, postUpdate, {
        new: true,
        runValidators: true
    });

}
//댓글삭제
exports.updateComment = async (id) => {
    await Comment.findByIdAndDelete(id);
}
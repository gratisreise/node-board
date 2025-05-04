//모델가져오기
const Post = require('../models/post.model')

//게시글 생성
exports.createPost = async (postData) => {
    const post = new Post(postData);
    await post.save();
}

//댓글목록조회
exports.getAllPosts = async () => {
    const posts = Post.find();
    return posts
}

//댓글 조회
exports.getPost = async (id) => {
    const post = Post.findById(id);
    return post;
}

//게시글 수정
exports.updatePost = async (id, postUpdate) => {
    await Post.findByIdAndUpdate(id, postUpdate);
}

//게시글 삭제
exports.deletePost = async (id) => {
    await Post.findByIdAndDelete(id);
}
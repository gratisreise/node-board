const postService = require('../services/post.service');
const responseService = require('../services/response.service')

//게시글 생성
exports.createPost = async (req, res) => {
    const post = await postService.createPost(req.body);
    res.json(responseService.getResult());
}

//게시글목록조회
exports.getAllPosts = async (req, res) => {
    const posts = await postService.getAllPosts();
    res.json(responseService.getDataResult(posts))
}

//게시글조회
exports.getPost = async (req, res) => {
    const post = await postService.getPost(req.params.id);
    res.json(responseService.getDataResult(post));
}

//게시글 수정
exports.updatePost = async (req, res) => {
    id = req.params.id;
    postUpdate = req.body;
    await postService.updatePost(id, postUpdate);
    res.json(responseService.getResult())
}

//게시글 삭제
exports.deletePost = async (req, res) => {
    await postService.deletePost(req.params.id);
    res.json(responseService.getResult());
}

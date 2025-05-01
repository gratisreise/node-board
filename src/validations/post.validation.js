const Joi = require('joi');

//스키마정의
const postSchema = Joi.object({
    title: Joi.string().min(3).max(10).required(),
    content: Joi.string().min(5).max(500).required()
})

//검증 미들웨어
const validatePost = (req, res, next) => {
    postSchema.validate(req.body);
    next();
}

module.exports = validatePost;
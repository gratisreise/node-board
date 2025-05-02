const Joi = require('joi');

//스키마정의
const commentSchema = Joi.object({
    author: Joi.string().min(1).max(12).required(),
    content: Joi.string().min(5).max(100).required()
})

//검증 미들웨어
const validateComment = (req, res, next) => {
    commentSchema.validate(req.body);
    next();
}

module.exports = validateComment;
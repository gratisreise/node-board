const Joi = require('joi')

const userSchema = Joi.object({
    name: Joi.string().min(2).max(12).required(),
    email: Joi.email().min(8).required()
})

const validteUser = (req, res, next) => {
    userSchema.validate(req.body);
    next();
}

module.exports = validteUser;
const Joi = require('joi');

const registerSchema = Joi.object({
    isim: Joi.string().min(3).max(30).required(),
    surname: Joi.string().min(5).max(30).required(),
    age: Joi.number().min(18).max(100).required(),
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).max(1000).required(),
    isMarried: Joi.boolean(),
    date: Joi.date(),
    createdAt: Joi.date()
});




module.exports = {registerSchema};
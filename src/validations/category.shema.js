import Joi from 'joi'

export const categorySchema = Joi.object({
    name: Joi.string().max(100),
    description: Joi.string().max(50).required(),
    tag: Joi.string().max(50).required(),
})

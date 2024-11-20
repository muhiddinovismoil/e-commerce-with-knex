import Joi from 'joi'

export const productSchema = Joi.object({
    product_id: Joi.string().hex().length(24).required(),
    title: Joi.string().max(100),
    picture: Joi.string().required(),
    summary: Joi.string().max(255),
    description: Joi.string().max(1000).required(),
    price: Joi.number().positive().required(),
    discount_type: Joi.string().valid('percentage', 'fixed'),
    discount_value: Joi.number().positive().max(100),
    tags: Joi.array().items(Joi.string()).max(20),
})

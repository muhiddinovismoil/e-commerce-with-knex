import Joi from 'joi'

export const cardItemSchema = Joi.object({
    cart_id: Joi.string().hex().length(24).required(),
    product_id: Joi.string().hex().length(24).required(),
    title: Joi.string().max(100),
    quantity: Joi.number().required(),
})

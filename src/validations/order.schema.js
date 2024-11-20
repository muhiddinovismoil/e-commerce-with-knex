import Joi from 'joi'
export const ordersSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    cart_id: Joi.number().integer().required(),
})

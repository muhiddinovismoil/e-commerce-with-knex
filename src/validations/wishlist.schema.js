import Joi from 'joi'
export const wishlistSchema = Joi.object({
    user_id: Joi.string().required(),
    product_id: Joi.string().required(),
})
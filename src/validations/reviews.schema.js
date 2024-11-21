import Joi from 'joi'
export const reviewsSchema = Joi.object({
    user_id: Joi.string().required(),
    product_id: Joi.string().required(),
    rating: Joi.number().integer().required(),
    comment: Joi.string().min(5).required(),
})
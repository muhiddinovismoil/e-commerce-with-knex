import Joi from 'joi'
export const cartScheme = Joi.object({
    user_id: Joi.string().required(),
    total: Joi.number().required(),
    created_at: Joi.date().default(Date.now)
})
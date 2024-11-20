import Joi from 'joi'
export const socialProfilesScheme = Joi.object({
    user_id: Joi.number().integer().required(),
    platform: Joi.string().min(5).required(),
    platform_user: Joi.string().min(5).required(),
})

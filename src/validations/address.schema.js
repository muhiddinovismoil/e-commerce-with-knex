import Joi from 'joi'
export const addressSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    title: Joi.string().min(5).required(),
    address_line_1: Joi.string().required(),
    address_line_2: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    postal_code: Joi.string().required(),
    phone_number: Joi.string()
        .pattern(/^\+998\d{9}$/, 'Phone number')
        .message('Phone number must be like +998XXXXXXX')
        .required(),
})

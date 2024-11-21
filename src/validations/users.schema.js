import Joi from 'joi'
export const userScheme = Joi.object({
    name: Joi.string().optional().min(3),
    email: Joi.string()
        .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .message('Invalid email format')
        .required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().optional().default('user'),
    avatar: Joi.string().optional(),
    username: Joi.string().required().min(6),
    birth_of_date: Joi.date().optional(),
    phone_number: Joi.string()
        .pattern(/^\+998\d{9}$/)
        .message(`Phone number must be like +998XXXXXXX`)
        .required(),
    is_active: Joi.boolean().default(false),
})

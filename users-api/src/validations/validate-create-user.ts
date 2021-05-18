import { Joi } from 'express-validation';

const validateCreateUser = {
    body: Joi.object({
        email: Joi
            .string()
            .email()
            .required(),

        password: Joi
            .string()
            .required(),
    })
}

export { validateCreateUser }
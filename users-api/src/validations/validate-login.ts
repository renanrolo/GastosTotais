import { Joi } from 'express-validation';

const validateLogin = {
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

export { validateLogin }
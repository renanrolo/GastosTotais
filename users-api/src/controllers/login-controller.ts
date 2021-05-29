import express from 'express';
import { validate } from 'express-validation';
import UsersInvite from '../entities/users-invite';
import { UnauthenticatedUser } from '../models/unauthenticated-user';
import { LoginService } from '../services/login-service';
import { validateLogin } from '../validations/validate-login';

const router = express.Router();

router.post('/login', validate(validateLogin), async function (req, res, next) {
    try {
        const { email, password } = req.body;

        const loginResponse = await LoginService.Authenticate(email, password);
        console.log("🚀 ~ loginResponse", loginResponse)

        if (loginResponse instanceof UsersInvite) {
            return res.status(400).json(loginResponse)
        }

        if (loginResponse instanceof UnauthenticatedUser) {
            return res.status(400).json(loginResponse)
        }

        return res.status(200).json(loginResponse);

    } catch(err) {
        next(err);
    }
});

export = router;
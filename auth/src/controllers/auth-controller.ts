import express, { Request, Response } from 'express';
import User from '../entities/user';
import { validate } from 'express-validation';
import { validateCreateUser } from '../validations/validate-create-user';
import { RegisterNewUserService } from '../services/register-new-user-service';

const router = express.Router();

router.get('/auth-user', function (req, res, next) {
    res.status(200).json({ message: 'ok' });
});

router.post('/auth-user', validate(validateCreateUser), async function (req: Request, res: Response, next) {
    try {

        const { email, password } = req.body;

        const user: User = await RegisterNewUserService.create(email, password);

        return res.status(200)
                  .json(user);

    } catch (err) {
        console.log(err)
        next()
    }
});

export = router;
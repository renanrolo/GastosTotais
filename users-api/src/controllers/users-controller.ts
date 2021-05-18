import express, { Request, Response } from 'express';
import { validate } from 'express-validation';
import { validateCreateUser } from '../validations/validate-create-user';
import { RegisterNewUserService } from '../services/register-new-user-service';

const router = express.Router();

router.get('/users', function (req, res, next) {
    res.status(200).json({ message: 'ok' });
});


export = router;
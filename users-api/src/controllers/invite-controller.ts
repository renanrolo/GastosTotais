import express from "express";
import { Joi, validate } from 'express-validation';
import { verifyAdmin } from "../configurations/token-verify";
import { InviteService } from '../services/invite-service'

const router = express.Router();

const validateInvite = {
    body: Joi.object({
        email: Joi
            .string()
            .email()
            .required()
    })
}

router.post('/invite', validate(validateInvite), function (req, res, next) {
    try {
        const { email } = req.body;

        return verifyAdmin(req, res, async function () {
            const invite = await InviteService.CreateInvite(email);

            return res.status(200).json({ message: 'Invite sent.', email: invite.Email });
        })
    } catch (err) {
        next(err);
    }
});

export = router;





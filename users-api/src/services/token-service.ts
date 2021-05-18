import jwt from 'jsonwebtoken';
import User from '../entities/user';

export class TokenService {

    public static CreateToken(user: User): any {

        console.log("auth secret is", process.env.AUTH_SECRET)

        if(!process.env.AUTH_SECRET){
            throw new Error("Secret cannot be empty");
        }

        return jwt.sign({ email: user.Email }, process.env.AUTH_SECRET, { expiresIn: "2 days" });
    }
}
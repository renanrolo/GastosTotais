import jwt from 'jsonwebtoken';
import Users from '../entities/users';
import { UserToken } from '../models/user-token';

export class TokenService {

    public static CreateToken(user: Users): UserToken {

        console.log("auth secret is", process.env.AUTH_SECRET)

        if(!process.env.AUTH_SECRET){
            throw new Error("Secret cannot be empty");
        }

        const token = jwt.sign({ email: user.Email }, process.env.AUTH_SECRET, { expiresIn: "2 days" });
        console.log("🚀 ~ TokenService ~ CreateToken ~ token", token)
        return new UserToken(user.UserUuid, token);
    }
}
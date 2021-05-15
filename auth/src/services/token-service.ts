import jsonwebtoken from 'jsonwebtoken';
import User from '../entities/user';

export class TokenService {

    public static CreateToken(user: User): any {

        console.log("auth secret is", process.env.AUTH_SECRET)

        return jsonwebtoken.sign(user.Email, process.env.AUTH_SECRET, {
            expiresIn: "1 day"
        });
    }
}
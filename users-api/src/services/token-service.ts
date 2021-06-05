import jwt from 'jsonwebtoken';
import Users from '../entities/users';
import { InvalidToken } from '../exceptions/custom-exceptions';
import { UserToken } from '../models/user-token';

export class TokenService {

    public static CreateToken(user: Users): UserToken {

        console.log("auth secret is", process.env.AUTH_SECRET)

        if (!process.env.AUTH_SECRET) {
            throw new Error("Secret cannot be empty");
        }

        const payload = { email: user.Email, userTypeId: user.UserTypeId };

        const token = jwt.sign(payload, this.secret(), { expiresIn: "2 days" });
        console.log("🚀 ~ TokenService ~ CreateToken: Token Created", user.Email)
        return new UserToken(user.UserUuid, token);
    }

    public static ValidateAndDecodeToken(token: string): object {
        let decodedToken: object;

        jwt.verify(token, this.secret(), function (err, decoded) {
            if (err) {
                console.log("🚀 > file: token-service.ts > line 26 > TokenService > err", err);
                throw new InvalidToken();
            }

            decodedToken = decoded;
        })

        return decodedToken;
    }


    private static secret(): string {
        if (!process.env.AUTH_SECRET) {
            throw new Error("Secret cannot be empty");
        }
        return process.env.AUTH_SECRET;
    }

}
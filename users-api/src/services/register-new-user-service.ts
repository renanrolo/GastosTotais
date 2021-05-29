import { v4 as uuidv4 } from 'uuid';
import { TokenService } from '../services/token-service'
import { EmailAlreadyInUse } from '../exceptions/custom-exceptions';
import AuthUser from '../entities/auth-user';
import Users from '../entities/users';

export class RegisterNewUserService {

    static async create(email: string, password: string): Promise<{ User: Users, Token: any }> {
        await this.CheckIfEmailIsAvaible(email);

        const dateTimeNow = new Date();

        const createdUser: Users = Users.create({
            UserUuid: uuidv4(),
            FullName: email,
            Email: email,
            CreationDate: dateTimeNow,
            LastUpdateDate: dateTimeNow,
        });

        await createdUser.save();

        console.log("New user created:", createdUser);

        const createdAuthUser: AuthUser = AuthUser.create({
            UserUuid: createdUser.UserUuid,
            Password: password,
            LastUpdateDate: dateTimeNow
        });

        await createdAuthUser.save();

        const token = TokenService.CreateToken(createdUser);

        return { User: createdUser, Token: token };
    }

    private static async CheckIfEmailIsAvaible(email: string) {
        const user = await this.FindUserByEmail(email);

        if (user) {
            throw new EmailAlreadyInUse();
        }
    }

    private static async FindUserByEmail(email: string): Promise<Users | undefined> {
        const query = {
            where: {
                Email: email
            }
        }

        return await Users.findOne(query);
    }
}
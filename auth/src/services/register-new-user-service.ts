import { v4 as uuidv4 } from 'uuid';
import User from '../entities/user';
import AuthUser from '../entities/auth-user';
import { EmailAlreadyInUse } from '../exceptions/custom-exceptions';

export class RegisterNewUserService {

    static async create(email: string, password: string): Promise<User> {
        await this.CheckIfEmailIsAvaible(email);

        const dateTimeNow = new Date();

        const createdUser: User = User.create({
            UserUuid: uuidv4(),
            FullName: email,
            Email: email,
            CreationDate: dateTimeNow,
            LastUpdateDate: dateTimeNow,

        });

        await createdUser.save();

        const createdAuthUser: AuthUser = AuthUser.create({
            UserUuid: createdUser.UserUuid,
            Password: password,
            LastUpdateDate: dateTimeNow
        });

        await createdAuthUser.save();

        return createdUser;
    }

    private static async CheckIfEmailIsAvaible(email: string) {
        const user: User = await this.FindUserByEmail(email);

        if (user) {
            throw new EmailAlreadyInUse();
        }
    }

    private static async FindUserByEmail(email: string): Promise<User> {
        const query = {
            where: {
                Email: email
            }
        }

        return await User.findOne(query);
    }
}
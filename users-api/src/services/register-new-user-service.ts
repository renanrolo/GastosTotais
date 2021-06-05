import { v4 as uuidv4 } from 'uuid';
import { TokenService } from '../services/token-service'
import { EmailAlreadyInUse, InviteNotFound } from '../exceptions/custom-exceptions';
import AuthUser from '../entities/auth-user';
import Users from '../entities/users';
import UsersInvite from '../entities/users-invite';

export class RegisterNewUserService {

    static async create(email: string, password: string): Promise<{ User: Users, Token: any }> {
        await this.CheckIfEmailIsAvaible(email);

        const dateTimeNow = new Date();

        const invite = await UsersInvite.findOne({
            where: {
                Email: email
            }
        });

        if (!invite) {
            throw new InviteNotFound();
        }

        invite.Accepted = true;

        UsersInvite.save(invite)

        const createdUser = await this.CreateUserWithRelationships(email, dateTimeNow, password);

        const token = TokenService.CreateToken(createdUser);

        return { User: createdUser, Token: token };
    }

    private static async CreateUserWithRelationships(email: string, dateTimeNow: Date, password: string) {
        const createdUser = Users.create({
            UserUuid: uuidv4(),
            FullName: email,
            Email: email,
            CreationDate: dateTimeNow,
            LastUpdateDate: dateTimeNow,
            UserTypeId: 1 //TODO: alterar isso aqui
        });

        await createdUser.save();

        console.log("New user created:", createdUser);

        const createdAuthUser = AuthUser.create({
            UserUuid: createdUser.UserUuid,
            Password: password,
            LastUpdateDate: dateTimeNow
        });

        await createdAuthUser.save();
        
        return createdUser;
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
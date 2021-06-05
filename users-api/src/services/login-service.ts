import { UnauthenticatedUser } from '../models/unauthenticated-user';
import { TokenService } from '../services/token-service'
import { InviteService } from '../services/invite-service';
import AuthUser from '../entities/auth-user';
import Users from '../entities/users';
import UsersInvite from '../entities/users-invite';
import { UserToken } from '../models/user-token';

export class LoginService {
    static async Authenticate(email: string, password: string): Promise<UnauthenticatedUser | UsersInvite | UserToken> {

        const user = await this.FindUserByEmail(email);

        if (!user) {
            return new UnauthenticatedUser('No user found with corresponding email.');
        }

        const authUser = await AuthUser.findOne(user.UserUuid);

        if (authUser) {
            if (authUser.Password === password) {
                return TokenService.CreateToken(user);
            }

            return new UnauthenticatedUser('Invalid password.');
        }

        const invitedUser = await UsersInvite.findOne({
            where: {
                Email: email,
                Accepted: false
            }
        });

        if (!!invitedUser) {
            return new UnauthenticatedUser('You need to accept your invitation first. Go check your email box.');
        }

        return InviteService.CreateInvite(email);
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
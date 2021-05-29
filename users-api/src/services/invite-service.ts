import UsersInvite from "../entities/users-invite";
import { v4 as uuidv4 } from 'uuid';

export class InviteService {
    static async CreateInvite(email: string): Promise<UsersInvite> {

        //TODO: pesquisar se o uuid existe antes de tentar criar a entidade
        const uuid = uuidv4();
        const dateTimeNow = new Date();

        const invite = UsersInvite.create({
            UserInviteUuid: uuid,
            Email: email,
            InviteDate: dateTimeNow,
            Accepted: false,
        });

        return await invite.save();
    }
}
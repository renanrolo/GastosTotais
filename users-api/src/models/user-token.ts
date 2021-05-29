export class UserToken {
    constructor(userUuid: string, token: string) {
        this.UserUuid = userUuid;
        this.Token = token;
    }

    UserUuid: string;
    Token: string;
}
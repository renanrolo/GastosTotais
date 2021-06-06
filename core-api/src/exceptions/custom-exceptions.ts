export class CustomException extends Error {
    constructor(statusCode: number, messageCode: string, message: string) {
        super(message)

        // assign the error class name in your custom error (as a shortcut)
        //this.name = 'CustomException'

        this.messageCode = messageCode;

        // capturing the stack trace keeps the reference to your error class
        Error.captureStackTrace(this, this.constructor);

        this.status = statusCode;
        this.message = message;
    }

    status: number;
    messageCode: string;
    message: string;
}

export class EmailAlreadyInUse extends CustomException {
    constructor() {
        super(400, "1", 'Email already in use');
    }
}

export class InviteNotFound extends CustomException {
    constructor() {
        const message = "Invite not found, please, ask for another invite";
        super(400, "0", message)
    }
}

export class InvalidToken extends CustomException {
    constructor() {
        const message = "Inválid Token";
        super(401, "0", message)
    }
}
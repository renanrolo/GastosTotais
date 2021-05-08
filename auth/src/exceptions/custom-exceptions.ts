export class CustomException extends Error {
    constructor(statusCode: number, messageCode: number, message: string) {
        super(message)

        // assign the error class name in your custom error (as a shortcut)
        this.name = 'CustomException'

        this.messageCode = messageCode;

        // capturing the stack trace keeps the reference to your error class
        Error.captureStackTrace(this, this.constructor);

        this.status = statusCode;
    }

    status;
    messageCode;
}

export class EmailAlreadyInUse extends CustomException {
    constructor() {
        super(400, 1, 'Email already in use');
    }
}
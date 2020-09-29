export class MessageDto {
    message: string[] = [];

    constructor(message: string) {
        this.message[0] = message;
    }
}
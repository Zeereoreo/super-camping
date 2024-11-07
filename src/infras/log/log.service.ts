import { injectable } from "inversify";

@injectable()
export class LogService {
    constructor() {}

    private readonly reset = "\x1b[0m" as const;

    info(message: any) {
        console.log(`\x1b[46m[INFO]${JSON.stringify(message)}${this.reset}`);
    }

    error(message: any) {
        console.error(`\x1b[41m[ERROR]${JSON.stringify(message)}${this.reset}`);
    }

    debug(message: any) {
        if (process.env.NODE_ENV !== "production") {
            console.log(
                `\x1b[42m[DEBUG]${JSON.stringify(message)}${this.reset}`
            );
        }
    }
}

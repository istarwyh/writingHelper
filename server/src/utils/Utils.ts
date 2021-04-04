import { configure, getLogger, Logger } from 'log4js';

export default class Utils {
    static notNull(o: any): any {
        if (o === null) {
            throw Error(o + " should not be null!");
        } else {
            return o;
        }
    }
    static null2Str(o: any): any {
        if (!o) {
            return "";
        } else {
            return o;
        }
    }
    /**
     * 
     * @param o todo Add generic type
     * @returns 
     */
    static notUndefined(o: any | undefined): any {
        if (o !== undefined) {
            return o;
        } else {
            throw Error(o + " should be found && not be undefinded!");
        }
    }

    static notBlank(o: string): boolean {
        return (o === "" || o.charAt(0) === " ") ? false : true;
    }

    static isBlank(o: string): boolean {
        return !this.notBlank(o);
    }

    static getCurTime(seperator: string) {
        return seperator + Date.now();
    }

    static createLogger(name:string): Logger {
        configure({
            appenders: {
                writingcat: {
                    type: "console",
                },
            },
            categories: { default: { appenders: [name], level: "debug" } }
        });
        return getLogger(name);
    }
}
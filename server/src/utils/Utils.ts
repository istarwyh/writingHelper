import { configure, getLogger, Logger } from 'log4js';
import AutoLoader from '../AutoLoader';

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
        return seperator + new Date().toLocaleTimeString();
    }

    static createLogger(name: string): Logger {
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

    /** 
     * 获得时间差,时间格式为 年-月-日 小时:分钟:秒 或者 年/月/日 小  时：分钟：秒
     * 其中，年月日为全格式，例如 ： 2010-10-12 01:00:00
     * 返回精度为：秒，分，小时，天
     */
    static getDateDiff(startTime: string, endTime: string, diffType: string): number {
        //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
        startTime = startTime.replace(/-/g, "/");
        endTime = endTime.replace(/-/g, "/");
        //将计算间隔类性字符转换为小写
        diffType = diffType.toLowerCase();
        var sTime = new Date(startTime); //开始时间
        var eTime = new Date(endTime); //结束时间
        //作为除数的数字
        var divNum = 1;
        switch (diffType) {
            case "second":
                divNum = 1000;
                break;
            case "minute":
                divNum = 1000 * 60;
                break;
            case "hour":
                divNum = 1000 * 3600;
                break;
            case "day":
                divNum = 1000 * 3600 * 24;
                break;
            default:
                break;
        }
        return (eTime.getTime() - sTime.getTime()) / divNum;

    }

    static logCurTime(){
        var curDate = new Date();
        AutoLoader.logger.info(curDate.toLocaleTimeString() + "    " + curDate.getTime());
    }
}
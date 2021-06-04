import { Connection } from 'vscode-languageserver';
import { ServerContext } from '../ServerContext';
import Utils from '../utils/Utils';

export default class CHome {

    /**
     * sayHello
     */
    public static sayHello(connection: Connection) {
        connection.window.showInformationMessage("Your writingHelper--writingCat has launched successfully! :-)");
    }

    /**
     * sayBye
     */
    public static sayBye(connection: Connection) {
        connection.window.showInformationMessage("Good Bye! :-)");
    }

    /**
     * sayIniTime
     */
    public static sayIniTime(connection: Connection) {
        ServerContext.setIniDate(new Date(CHome.sayCurTime(connection)));
    }

    /**
     * say Current Time
     * @param connection 
     */
    public static sayCurTime(connection: Connection): string {
        let curTime = Utils.getCurTime("Current time is ");
        connection.window.showInformationMessage(curTime);
        return curTime;
    }

    /**
     * sayElapseTime
     */
    public static sayElapseTime(connection: Connection) {
        let curDate = new Date();
        let elapseTime = curDate.getTime() - ServerContext.getIniDate().getTime();
        connection.window.showWarningMessage("" + elapseTime);
    }
}
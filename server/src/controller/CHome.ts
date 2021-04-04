import { Connection } from 'vscode-languageserver';

export default class CHome{

    /**
     * sayHello
     */
    public static sayHello(connection : Connection) {
        connection.window.showInformationMessage("Your writingHelper--writingCat has launched successfully! :-)");
    }

    /**
     * sayBye
     */
    public static sayBye(connection : Connection) {
	    connection.window.showInformationMessage("Good Bye! :-)");
    }
}
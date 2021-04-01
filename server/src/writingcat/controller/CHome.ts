import { _Connection } from 'vscode-languageserver/node';

export default class CHome{

    /**
     * sayHello
     */
    public static sayHello(connection : _Connection) {
        connection.window.showInformationMessage("Your writingHelper--writingCat has launched successfully! :-)");
    }

    /**
     * sayBye
     */
    public static sayBye(connection : _Connection) {
	    connection.window.showInformationMessage("Good Bye! :-)");
    }
}
import { window } from "vscode";

export default class CHome{
    /**
     * sayHello
     */
    public static sayHello() {
        window.showInformationMessage("Your writingHelper--writingCat has launched successfully! :-)");
    }

    /**
     * sayBye
     */
    public static sayBye() {
	    window.showInformationMessage("Good Bye! :-)");
    }
}
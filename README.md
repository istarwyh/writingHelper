# To User
## WritingHelper-a demo 

Hi, I am a VS Code Extension of IELTS English Writing, which can provide professional suggestion and completion of `Word Collocation`/`Word Group`.
If you have not yet reliazed word collocation, you can see [here](https://www.thoughtco.com/what-is-collocation-1211244#:~:text=Collocation%20refers%20to%20a%20group%20of%20two%20or,place.%20Collocation%E2%80%8Bs%20are%20words%20that%20are%20located%20together.) for more information.

## how to activate me 
Just install me and write in a `.txt` file in English.

## **Bug**:-(

for word completion, after we use "tab" key, the result of collocation completion more than what we need.:-(
Currently, we can use "tab" key and use "Backspace" key and use "tab"/"<-" Key to resolve this problem.
Welcome to report more problems or give me more issues:-)My contact details(weixin) is on this page!

**Enjoy!**


----------------

# To Developer & Committer:
## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file in which you declare your extension and command.
  * The sample plugin registers a command and defines its title and command name. With this information VS Code can show the command in the command palette. It doesn’t yet need to load the plugin.
* `src/writingcat/extension.ts` - this is the main file where you will provide the implementation of your command.
  * The file exports one function, `activate`, which is called the very first time your extension is activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`.
  * We pass the function containing the implementation of the command as the **second** parameter to `registerCommand`.

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Actually, it will run the command in "scripts" in package.json
* `tsc` tools will behave like in tsconfig.json
* Set breakpoints in your code inside `src/writingcat/extension.ts` to debug the extension.
* Find output from your extension in the debug console.

## Make changes

* You can relaunch the extension from the debug toolbar after changing code in `src/writingcat/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.


## Explore the API

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.

## Run tests

* Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
* Press `F5` to run the tests in a new window with your extension loaded.
* See the output of the test result in the debug console.
* Make changes to `src/test/suite/extension.test.ts` or create new test files inside the `test/suite` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * You can create folders inside the `test` folder to structure your tests any way you want.

## Go further

 * Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
 * [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
 * Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).


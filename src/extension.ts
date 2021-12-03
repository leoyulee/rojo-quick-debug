// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as childProcess from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rojo-quick-debug" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	console.log(context.subscriptions.push(
		vscode.commands.registerCommand('rojo-quick-debug.helloWorld', () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from Rojo Quick Debug!');
		})
	));
	console.log(context.subscriptions.push(
		vscode.commands.registerCommand('rojo-quick-debug.rojoBuild', (uri: vscode.Uri) => {
			if (uri === null){ return ;};
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.commands.executeCommand('rojo.build');
			let result = childProcess.execFileSync(
				"run-in-roblox", //path to run-in-roblox exe..?
				["--place", "build.rbxl", "--script", uri.fsPath] //args
			);
			vscode.window.showInformationMessage('rojo.build executed!');
			return result;
		})
	));
}

// this method is called when your extension is deactivated
export function deactivate() {}

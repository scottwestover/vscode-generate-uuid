import * as vscode from 'vscode';
import { v4 } from 'uuid';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('generate-uuid.generate', () => {
		// Get the active editor
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit((eb) => {
				eb.insert(editor.selection.active, v4());
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

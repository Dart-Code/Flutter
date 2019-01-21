import * as vs from "vscode";

export class SdkCommands {
	// TODO: Find an easy way to share the API signature class.
	constructor(context: vs.ExtensionContext, private dartExtensionApi: any) {

		context.subscriptions.push(vs.commands.registerCommand("flutter.createSampleProject",
			(_) => this.runFunctionIfSupported(dartExtensionApi.createSampleProject)));
	}

	private async runFunctionIfSupported<T>(f: () => Promise<T>): Promise<T> {
		if (!f) {
			this.showApiMismatchError();
			return undefined;
		}

		return f();
	}

	private showApiMismatchError(): void {
		vs.window.showErrorMessage("The installed version of the Dart extension does not support this feature. Please update the Dart extension.");
	}
}

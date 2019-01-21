import * as vs from "vscode";

export class SdkCommands {
	constructor(context: vs.ExtensionContext) {

		context.subscriptions.push(vs.commands.registerCommand("flutter.createSampleProject", (_) => this.createFlutterSampleProject()));
	}
	private async createFlutterSampleProject(): Promise<vs.Uri> {
		// TODO: Check Dart extension capabilities.
		return vs.commands.executeCommand("_dart.flutter.createSampleProject");
	}
}

import * as vs from "vscode";
import { SdkCommands } from "./commands/sdk";
import { dartCodeExtensionIdentifier } from "./constants";

export async function activate(context: vs.ExtensionContext): Promise<void> {
	// Ensure we have a Dart extension.
	const dartExt = vs.extensions.getExtension(dartCodeExtensionIdentifier);
	if (!dartExt) {
		// This should not happen since the Flutter extension has a dependency on the Dart one
		// but just in case, we'd like to give a useful error message.
		throw new Error("The Dart extension is not installed, Flutter extension is unable to activate.");
	}
	await dartExt.activate();

	// Register SDK commands.
	const sdkCommands = new SdkCommands(context, dartExt.exports);
}

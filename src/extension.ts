import * as vs from "vscode";
import { SdkCommands } from "./commands/sdk";

export function activate(context: vs.ExtensionContext) {
	console.log("Flutter extension activated!");

	// Register SDK commands.
	const sdkCommands = new SdkCommands(context);
}

# Flutter for Visual Studio Code

[![Discord Chat](https://img.shields.io/badge/chat-discord-blue.svg)](https://discord.gg/xSTPEqm)
[![Follow on Twitter](https://img.shields.io/badge/twitter-dartcode-blue.svg)](https://twitter.com/DartCode)
[![Follow on Bluesky](https://img.shields.io/badge/bluesky-dartcode.org-blue.svg)](https://bsky.app/profile/dartcode.org)
[![Contribute to Dart Code](https://img.shields.io/badge/help-contribute-551A8B.svg)](https://github.com/Dart-Code/Dart-Code/blob/master/CONTRIBUTING.md)

Adds support for [Flutter](https://flutter.dev/) development (mobile, web, and desktop) to [Visual Studio Code](https://code.visualstudio.com/), including hot reload, device management, widget editing, debugging, testing, and DevTools integration.

This extension depends on and automatically installs the [Dart extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) for [Dart](https://dart.dev/) language support.

## Features

- **Hot Reload & Debugging** — Run, debug, and attach to Flutter apps (mobile, web, and desktop) with breakpoints, expression evaluation, hot reload and hot restart (including hot reload on save), and configurable "Just My Code" debugging.
- **Devices & Emulators** — Quickly switch target devices from the status bar, launch Android emulators and iOS simulators, and run `flutter doctor` directly from VS Code.
- **Widget Editing & Refactoring** — Code completion, real-time diagnostics, widget-aware refactorings (wrap/remove/extract widget), closing labels, Flutter UI guides, and automatic formatting via `dart format`.
- **Flutter Sidebar, Property Editor & Widget Preview** — Dedicated VS Code views for managing your running app, editing widget properties, and previewing widgets alongside your code.
- **Testing & Packages** — Integrated with VS Code's Test Explorer to discover, run, debug, and view coverage for Flutter tests, plus Pub package commands, automatic `pub get` on `pubspec.yaml` changes, and a **Dependencies** view in the Explorer.
- **DevTools & AI Tooling** — Built-in [Flutter DevTools](https://docs.flutter.dev/tools/devtools/overview) integration (Widget Inspector, performance, CPU profiler, memory, network, and logging) and AI agent support via the Dart SDK [MCP server](https://dart.dev/tools/mcp-server) and VS Code language model tools.

## Getting Started

1. Install this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter), [Open VSX](https://open-vsx.org/extension/Dart-Code/flutter), or by searching for **Flutter** in the VS Code Extensions view. The [Dart extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) is installed automatically.
2. Open a folder containing a Flutter project (or run **Flutter: Create New Project** from the Command Palette). If the [Flutter SDK](https://flutter.dev/) is not already installed on your `PATH`, the extension can download it for you.
3. Press `F5` (or use the **Run and Debug** view) to run and debug your app.

> **Note:** Run projects using `F5` or the **Run and Debug** menu for full debugging, hot reload, and DevTools functionality. Running `flutter run` directly in the built-in terminal will not provide all features.

## Documentation

- [Flutter VS Code Documentation](https://docs.flutter.dev/tools/vs-code)
- [Dart-Code Documentation Overview](https://dartcode.org/docs/)
- [Extension Settings](https://dartcode.org/docs/settings/)
- [Commands](https://dartcode.org/docs/commands/) & [Key Bindings](https://dartcode.org/docs/key-bindings/)
- [Refactorings & Code Fixes](https://dartcode.org/docs/refactorings-and-code-fixes/)
- [Frequently Asked Questions](https://dartcode.org/faq/)
- [Release Notes / Changelog](https://dartcode.org/releases/)

## Feedback & Contributing

- **Issues & Feature Requests**: Report bugs or request features for both the Dart and Flutter extensions on [GitHub Issues](https://github.com/Dart-Code/Dart-Code/issues/new/choose). When reporting a bug, attaching a log file ([instructions](https://dartcode.org/docs/logging/)) is often very helpful.
- **Community**: Ask questions or chat in the [Dart-Code Discord](https://discord.gg/xSTPEqm).
- **Contributing**: See [CONTRIBUTING.md](https://github.com/Dart-Code/Dart-Code/blob/master/CONTRIBUTING.md) for instructions on building, running, and testing the extensions locally.

## Telemetry

The companion Dart extension collects basic anonymous usage analytics — such as extension, editor, and SDK versions, platform, certain commands and debug session types, and a few feature settings — to help guide development.

A complete list of collected events and properties is available in the [analytics documentation](https://dartcode.org/docs/analytics/) and [`telemetry.json`](https://github.com/Dart-Code/Dart-Code/blob/master/telemetry.json). Reporting can be disabled via VS Code's **Telemetry: Telemetry Level** setting (and also respects `DO_NOT_TRACK=1` and Dart/Flutter tooling telemetry opt-out).

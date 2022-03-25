oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g kepler-cli
$ kepler-cli COMMAND
running command...
$ kepler-cli (--version)
kepler-cli/0.0.0 darwin-arm64 node-v16.14.0
$ kepler-cli --help [COMMAND]
USAGE
  $ kepler-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kepler-cli hello PERSON`](#kepler-cli-hello-person)
* [`kepler-cli hello world`](#kepler-cli-hello-world)
* [`kepler-cli help [COMMAND]`](#kepler-cli-help-command)
* [`kepler-cli plugins`](#kepler-cli-plugins)
* [`kepler-cli plugins:install PLUGIN...`](#kepler-cli-pluginsinstall-plugin)
* [`kepler-cli plugins:inspect PLUGIN...`](#kepler-cli-pluginsinspect-plugin)
* [`kepler-cli plugins:install PLUGIN...`](#kepler-cli-pluginsinstall-plugin-1)
* [`kepler-cli plugins:link PLUGIN`](#kepler-cli-pluginslink-plugin)
* [`kepler-cli plugins:uninstall PLUGIN...`](#kepler-cli-pluginsuninstall-plugin)
* [`kepler-cli plugins:uninstall PLUGIN...`](#kepler-cli-pluginsuninstall-plugin-1)
* [`kepler-cli plugins:uninstall PLUGIN...`](#kepler-cli-pluginsuninstall-plugin-2)
* [`kepler-cli plugins update`](#kepler-cli-plugins-update)

## `kepler-cli hello PERSON`

Say hello

```
USAGE
  $ kepler-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kepler-cli/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `kepler-cli hello world`

Say hello world

```
USAGE
  $ kepler-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `kepler-cli help [COMMAND]`

Display help for kepler-cli.

```
USAGE
  $ kepler-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for kepler-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `kepler-cli plugins`

List installed plugins.

```
USAGE
  $ kepler-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ kepler-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `kepler-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kepler-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ kepler-cli plugins add

EXAMPLES
  $ kepler-cli plugins:install myplugin 

  $ kepler-cli plugins:install https://github.com/someuser/someplugin

  $ kepler-cli plugins:install someuser/someplugin
```

## `kepler-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ kepler-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ kepler-cli plugins:inspect myplugin
```

## `kepler-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kepler-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ kepler-cli plugins add

EXAMPLES
  $ kepler-cli plugins:install myplugin 

  $ kepler-cli plugins:install https://github.com/someuser/someplugin

  $ kepler-cli plugins:install someuser/someplugin
```

## `kepler-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ kepler-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ kepler-cli plugins:link myplugin
```

## `kepler-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kepler-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kepler-cli plugins unlink
  $ kepler-cli plugins remove
```

## `kepler-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kepler-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kepler-cli plugins unlink
  $ kepler-cli plugins remove
```

## `kepler-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kepler-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kepler-cli plugins unlink
  $ kepler-cli plugins remove
```

## `kepler-cli plugins update`

Update installed plugins.

```
USAGE
  $ kepler-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

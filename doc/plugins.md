# Plugins

- [`xmlim plugins`](#xmlim-plugins)
- [`xmlim plugins:install PLUGIN...`](#xmlim-pluginsinstall-plugin)
- [`xmlim plugins:inspect PLUGIN...`](#xmlim-pluginsinspect-plugin)
- [`xmlim plugins:install PLUGIN...`](#xmlim-pluginsinstall-plugin-1)
- [`xmlim plugins:link PLUGIN`](#xmlim-pluginslink-plugin)
- [`xmlim plugins:uninstall PLUGIN...`](#xmlim-pluginsuninstall-plugin)
- [`xmlim plugins:uninstall PLUGIN...`](#xmlim-pluginsuninstall-plugin-1)
- [`xmlim plugins:uninstall PLUGIN...`](#xmlim-pluginsuninstall-plugin-2)
- [`xmlim plugins update`](#xmlim-plugins-update)

## `xmlim plugins`

List installed plugins.

```
USAGE
  $ xmlim plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ xmlim plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.0/src/commands/plugins/index.ts)_

## `xmlim plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ xmlim plugins:install PLUGIN...

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
  $ xmlim plugins add

EXAMPLES
  $ xmlim plugins:install myplugin

  $ xmlim plugins:install https://github.com/someuser/someplugin

  $ xmlim plugins:install someuser/someplugin
```

## `xmlim plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ xmlim plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ xmlim plugins:inspect myplugin
```

## `xmlim plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ xmlim plugins:install PLUGIN...

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
  $ xmlim plugins add

EXAMPLES
  $ xmlim plugins:install myplugin

  $ xmlim plugins:install https://github.com/someuser/someplugin

  $ xmlim plugins:install someuser/someplugin
```

## `xmlim plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ xmlim plugins:link PLUGIN

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
  $ xmlim plugins:link myplugin
```

## `xmlim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ xmlim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ xmlim plugins unlink
  $ xmlim plugins remove
```

## `xmlim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ xmlim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ xmlim plugins unlink
  $ xmlim plugins remove
```

## `xmlim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ xmlim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ xmlim plugins unlink
  $ xmlim plugins remove
```

## `xmlim plugins update`

Update installed plugins.

```
USAGE
  $ xmlim plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

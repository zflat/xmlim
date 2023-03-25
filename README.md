# xmlim

xmlim CLI

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g xmlim
$ xmlim COMMAND
running command...
$ xmlim (--version)
xmlim/0.0.0 linux-x64 node-v19.2.0
$ xmlim --help [COMMAND]
USAGE
  $ xmlim COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`xmlim gen XML_FILE`](#xmlim-gen-xml_file)
- [`xmlim watch PATH`](#xmlim-watch-path)
- [`xmlim help [COMMANDS]`](#xmlim-help-commands)

## `xmlim gen XML_FILE`

Generate a diagram from the given XML file

```
USAGE
  $ xmlim gen XML_FILE -f <value>

ARGUMENTS
  XML_FILE  File path to an XML document

FLAGS
  -f, --format=<value>  (optional) Format of the output to generate

DESCRIPTION
  Generate diagram

EXAMPLES
  $ oex gen example.xml --format svg
```

_See code: [dist/commands/gen/index.ts](https://github.com/zflat/xmlim/blob/v0.0.0/dist/commands/gen/index.ts)_

## `xmlim watch PATH -f <value>`

Watch a directory or file for changes and generate updated diagrams

```
USAGE
  $ xmlim watch PATH

FLAGS
  -f, --format=<value>  (optional) Format of the output

DESCRIPTION
  Watch PATH file or directory for changes and re-generate diagrams from XML files found

EXAMPLES
  $ xmlim watch ~/example_files/
```

## `xmlim help [COMMANDS]`

Display help for xmlim.

```
USAGE
  $ xmlim help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for xmlim.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.7/src/commands/help.ts)_

<!-- commandsstop -->

## Impementation notes

- CLI created using [oclif](https://github.com/oclif/oclif)
- XML parsing using https://github.com/rgrove/parse-xml
- Diagram generation using https://www.nomnoml.com/

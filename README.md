# xmlim

xmlim (pronounced ex-em-el-im) is a CLI for generating diagrams of XML documents. XML is hierarchical, so a tree diagram is well suited for representing the structure of an XML document.

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

- [`xmlim gen PATH`](#xmlim-gen-path)
- [`xmlim watch file PATH`](#xmlim-watch-file-path)
- [`xmlim watch dir PATH`](#xmlim-watch-dir-path)
- [`xmlim help [COMMANDS]`](#xmlim-help-commands)

## `xmlim gen PATH`

Generate a diagram from the given XML file

```
USAGE
  $ xmlim gen PATH -f <value>

ARGUMENTS
  PATH  File path to an XML document

FLAGS
  -f, --format=<value>  (optional) Format of the output to generate

DESCRIPTION
  Generate diagram

EXAMPLES
  $ xmlim gen example.xml --format svg
```

_See code: [dist/commands/gen/index.ts](https://github.com/zflat/xmlim/blob/v0.0.0/dist/commands/gen/index.ts)_

## `xmlim watch file PATH`

Watch a file for changes and generate updated diagrams

```
USAGE
  $ xmlim watch file PATH -f <value>

FLAGS
  -f, --format=<value>  (optional) Format of the output

DESCRIPTION
  Watch PATH file for changes and re-generate diagrams from XML files found

EXAMPLES
  $ xmlim watch file ~/example.xml
```

## `xmlim watch dir PATH`

Watch a directory or for changes to any XML file and generate updated diagrams

```
USAGE
  $ xmlim watch dir PATH -f <value>

FLAGS
  -f, --format=<value>  (optional) Format of the output

DESCRIPTION
  Find all XML files in PATH directory and watch them for changes.
  Re-generate diagrams for the XML files that change.

EXAMPLES
  $ xmlim watch dir ~/example_files/
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

- CLI command processing and application scaffolded using [oclif](https://github.com/oclif/oclif)
- XML parsing using https://github.com/rgrove/parse-xml
- Diagram generation using https://www.nomnoml.com/

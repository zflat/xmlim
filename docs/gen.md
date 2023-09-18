`xmlim gen`
===========

Generate a diagram of a specified XML document

* [`xmlim gen FILE`](#xmlim-gen-file)

## `xmlim gen FILE`

Generate a diagram of a specified XML document

```
USAGE
  $ xmlim gen FILE [--format mermaid|svg]

ARGUMENTS
  FILE  Path to the XML document

FLAGS
  --format=<option>  [default: svg] Format of the output
                     <options: mermaid|svg>

DESCRIPTION
  Generate a diagram of a specified XML document

EXAMPLES
  $ xmlim gen data.xml
```

_See code: [dist/commands/gen/index.ts](https://github.com/zflat/xmlim/blob/v0.1.0/dist/commands/gen/index.ts)_

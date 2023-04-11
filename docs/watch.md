`xmlim watch`
=============

Watch a file or directory for changes and re-generate a new diagram

* [`xmlim watch dir DIR`](#xmlim-watch-dir-dir)
* [`xmlim watch file FILE`](#xmlim-watch-file-file)

## `xmlim watch dir DIR`

Watches all *.xml documents in the directory and generates a new diagram when a file changes

```
USAGE
  $ xmlim watch dir DIR [--format svg|mermaid]

ARGUMENTS
  DIR  Path to the directory containing *.xml documents to watch

FLAGS
  --format=<option>  [default: svg] Format of the output
                     <options: svg|mermaid>

DESCRIPTION
  Watches all *.xml documents in the directory and generates a new diagram when a file changes

EXAMPLES
  $ xmlim watch dir data.xml
```

## `xmlim watch file FILE`

Watches the XML document and generates a new diagram when the file changes

```
USAGE
  $ xmlim watch file FILE [--format svg|mermaid]

ARGUMENTS
  FILE  Path to the XML document to watch

FLAGS
  --format=<option>  [default: svg] Format of the output
                     <options: svg|mermaid>

DESCRIPTION
  Watches the XML document and generates a new diagram when the file changes

EXAMPLES
  $ xmlim watch file data.xml
```

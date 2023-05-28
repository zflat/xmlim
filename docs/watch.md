`xmlim watch`
=============

Watch a file or directory for changes and re-generate a new diagram

* [`xmlim watch dir DIR`](#xmlim-watch-dir-dir)
* [`xmlim watch file FILE`](#xmlim-watch-file-file)

## `xmlim watch dir DIR`

Find all XML files in DIR and watch them for changes.

```
USAGE
  $ xmlim watch dir DIR [--format svg|mermaid]

ARGUMENTS
  DIR  Path to the directory containing *.xml documents to watch

FLAGS
  --format=<option>  [default: svg] Format of the output
                     <options: svg|mermaid>

DESCRIPTION
  Find all XML files in DIR and watch them for changes.
  Re-generate diagrams for the XML files that change.

EXAMPLES
  $ xmlim watch dir ./example_files/
```

## `xmlim watch file FILE`

Watch FILE for changes and re-generate diagrams from XML files found

```
USAGE
  $ xmlim watch file FILE [--format svg|mermaid]

ARGUMENTS
  FILE  Path to the XML document to watch

FLAGS
  --format=<option>  [default: svg] Format of the output
                     <options: svg|mermaid>

DESCRIPTION
  Watch FILE for changes and re-generate diagrams from XML files found

EXAMPLES
  $ xmlim watch file data.xml
```

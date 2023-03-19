import { parse } from "fsp-xml-parser";

export function parseXml(xml: string): boolean {
  // See https://github.com/FullStackPlayer/ts-xml-parser for parser usage
  const parsed = parse(xml, true);
  // Level order traversal (https://racross1.medium.com/level-order-traversal-of-binary-tree-in-javascript-queue-2860b2bafec1)
  console.log(parsed.root);
  return true;
}

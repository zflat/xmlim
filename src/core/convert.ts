import { parse, XmlNode } from "fsp-xml-parser";

import { ChartFormat } from "./chartFormat/base";

/**
 *
 * Level order traversal of XmlNode
 * (https://racross1.medium.com/level-order-traversal-of-binary-tree-in-javascript-queue-2860b2bafec1)
 * @param root XmlNode the the top level
 * @returns Structure representing levels of the nodes
 *
 */
const levelOrderTraverseQ = function (
  root: XmlNode | undefined
): Array<XmlNode[]> {
  if (root === undefined) {
    return new Array<XmlNode[]>();
  }

  const queue = [root];
  const output = new Array<XmlNode[]>();

  while (queue.length > 0) {
    const queueLength = queue.length;
    const currLevel = new Array<XmlNode>();

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();

      if (current !== undefined) {
        const children = (current.children || new Array<XmlNode>()).reverse();
        for (const child of children) {
          queue.push(child);
        }

        currLevel.push(current);
      }
    }

    output.push(currLevel);
  }

  return output;
};

export function chartFromXml(xml: string, formatter: ChartFormat): string {
  // See https://github.com/FullStackPlayer/ts-xml-parser for parser usage
  const parsed = parse(xml, true);
  if (parsed.root === undefined) {
    return "";
  }

  const levels = levelOrderTraverseQ(parsed.root);

  let chart = formatter.chartHeader();
  let levelCount = 0;
  let n = 0;
  for (const level of levels) {
    n = 0;
    for (const node of level) {
      chart += formatter.nodeDecl({ level: levelCount, position: n }, node);
      n++;
    }

    levelCount++;
  }

  levelCount = 0;
  let m = 0;
  for (const level of levels) {
    n = 0;
    m = 0;
    for (const node of level) {
      const children = node.children || new Array<XmlNode>();
      for (const child of children) {
        const coordFrom = { level: levelCount, position: n };
        const coordTo = { level: levelCount + 1, position: m };
        chart += formatter.nodeConnection(coordFrom, node, coordTo, child);
        m++;
      }

      n++;
    }

    levelCount++;
  }

  return chart;
}

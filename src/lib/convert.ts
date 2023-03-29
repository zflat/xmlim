import { parseXml, XmlDocument, XmlNode, XmlElement } from "@rgrove/parse-xml";

import { ChartFormat } from "./chartFormat";

/**
 *
 * Level order traversal of XmlNode
 * (https://racross1.medium.com/level-order-traversal-of-binary-tree-in-javascript-queue-2860b2bafec1)
 * @param doc XmlDocument top level
 * @returns Structure representing levels of the nodes
 *
 */
const levelOrderTraverseQ = function (
  doc: XmlDocument | undefined
): Array<XmlElement[]> {
  const output = new Array<XmlElement[]>();

  if (doc === undefined || doc.children[0] instanceof XmlElement !== true) {
    return output;
  }

  const queue: XmlElement[] = [];
  if (doc.children[0] instanceof XmlElement) {
    queue.push(doc.children[0]);
  }

  while (queue.length > 0) {
    const queueLength = queue.length;
    const currLevel = new Array<XmlElement>();

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();

      if (current instanceof XmlElement) {
        const children = current.children || new Array<XmlElement>();
        Array.prototype.push.apply(
          queue,
          children.filter((child) => child instanceof XmlElement)
        );
        currLevel.push(current);
      }
    }

    output.push(currLevel);
  }

  return output;
};

export function chartFromXml(xml: string, formatter: ChartFormat): string {
  // See https://github.com/FullStackPlayer/ts-xml-parser for parser usage
  const doc = parseXml(xml).document;

  if (doc === undefined) {
    return "";
  }

  const levels = levelOrderTraverseQ(doc);

  let chart = formatter.chartHeader();
  let levelCount = 0;
  let n = 0;
  for (const level of levels) {
    n = 0;
    for (const node of level) {
      const isLast = levelCount === levels.length - 1 && n === level.length - 1;
      chart += formatter.nodeDecl(
        { level: levelCount, position: n },
        node,
        isLast
      );
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
        if (child instanceof XmlElement) {
          const coordFrom = { level: levelCount, position: n };
          const coordTo = { level: levelCount + 1, position: m };
          chart += formatter.nodeConnection(coordFrom, node, coordTo, child);
          m++;
        }
      }

      n++;
    }

    levelCount++;
  }

  return chart.trim();
}

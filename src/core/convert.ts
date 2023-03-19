import { parse, XmlNode } from "fsp-xml-parser";

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

export function chartFromXml(xml: string): boolean {
  // See https://github.com/FullStackPlayer/ts-xml-parser for parser usage
  const parsed = parse(xml, true);
  if (parsed.root === undefined) {
    return false;
  }

  console.log(parsed);

  const levels = levelOrderTraverseQ(parsed.root);
  console.log(levels);

  let chart = "stateDiagram-v2";
  let levelCount = 0;
  let n = 0;
  for (const level of levels) {
    n = 0;
    for (const node of level) {
      let attribs = "";
      const attributes = node.attributes || {};
      for (const attrKey in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
          attribs += "\\n" + attrKey + "=" + attributes[attrKey];
        }
      }

      chart +=
        "\n    " +
        node.name +
        "_l" +
        levelCount +
        "n" +
        n +
        ": " +
        node.name +
        attribs;
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
        chart +=
          "\n    " +
          node.name +
          "_l" +
          levelCount +
          "n" +
          n +
          "-->" +
          child.name +
          "_l" +
          (levelCount + 1) +
          "n" +
          m;

        m++;
      }

      n++;
    }

    levelCount++;
  }

  console.log(chart);

  return true;
}

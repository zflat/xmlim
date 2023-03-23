import { XmlNode } from "fsp-xml-parser";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./base";

export function id(coord: NodeCoordinate, node: XmlNode): string {
  return `${node.name} (${coord.position}, ${coord.level})`;
}

export const format: ChartFormat = {
  chartHeader(): string {
    return "";
  },

  nodeDecl(coord: NodeCoordinate, node: XmlNode): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs += ";" + attrKey + "=" + formattedAttrVal(attributes[attrKey]);
      }
    }

    return `\n[${id(coord, node)}${attribs}]`;
  },

  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlNode,
    coordTo: NodeCoordinate,
    nodeTo: XmlNode
  ): string {
    const idFrom = id(coordFrom, nodeFrom);
    const idTo = id(coordTo, nodeTo);
    return `\n[${idFrom}]->[${idTo}]`;
  },
};

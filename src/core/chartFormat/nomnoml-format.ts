import { XmlElement } from "@rgrove/parse-xml";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./base";

export function id(coord: NodeCoordinate, node: XmlElement): string {
  return `${node.name} (${coord.position}, ${coord.level})`;
}

export const format: ChartFormat = {
  chartHeader(): string {
    return "";
  },

  nodeDecl(coord: NodeCoordinate, node: XmlElement): string {
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
    nodeFrom: XmlElement,
    coordTo: NodeCoordinate,
    nodeTo: XmlElement
  ): string {
    const idFrom = id(coordFrom, nodeFrom);
    const idTo = id(coordTo, nodeTo);
    return `\n[${idFrom}]->[${idTo}]`;
  },
};

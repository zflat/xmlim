import { XmlNode } from "fsp-xml-parser";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./base";

export function id(coord: NodeCoordinate, node: XmlNode): string {
  return `${node.name}_l${coord.level}n${coord.position}`;
}

export const format: ChartFormat = {
  chartHeader(): string {
    return "stateDiagram-v2";
  },

  nodeDecl(coord: NodeCoordinate, node: XmlNode): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs += "\\n" + attrKey + "=" + formattedAttrVal(attributes[attrKey]);
      }
    }

    return `\n    ${id(coord, node)}: ${node.name}${attribs}`;
  },

  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlNode,
    coordTo: NodeCoordinate,
    nodeTo: XmlNode
  ): string {
    return `\n    ${id(coordFrom, nodeFrom)}-->${id(coordTo, nodeTo)}`;
  },
};

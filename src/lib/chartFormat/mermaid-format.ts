import { XmlElement } from "@rgrove/parse-xml";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./";

export function id(coord: NodeCoordinate, node: XmlElement): string {
  return `${node.name}_l${coord.level}n${coord.position}`;
}

export const format: ChartFormat = {
  chartHeader(): string {
    return "stateDiagram-v2";
  },

  nodeDecl(coord: NodeCoordinate, node: XmlElement): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs +=
          "\\n" + attrKey + "=" + formattedAttrVal(attributes[attrKey]);
      }
    }

    return `\n    ${id(coord, node)}: ${node.name}${attribs}`;
  },

  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlElement,
    coordTo: NodeCoordinate,
    nodeTo: XmlElement
  ): string {
    return `\n    ${id(coordFrom, nodeFrom)}-->${id(coordTo, nodeTo)}`;
  },
};

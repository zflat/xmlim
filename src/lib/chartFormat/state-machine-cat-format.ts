import { XmlElement } from "@rgrove/parse-xml";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./";

export function id(coord: NodeCoordinate, _node: XmlElement): string {
  return `p${coord.position}l${coord.level}`;
}

export const format: ChartFormat = {
  chartHeader(): string {
    return "";
  },

  nodeDecl(coord: NodeCoordinate, node: XmlElement, isLast: boolean): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs +=
          "\n  " + attrKey + "=" + formattedAttrVal(attributes[attrKey]);
      }
    }

    return (
      `\n${id(coord, node)} [label="${node.name}"]` +
      (attribs === "" ? "" : `:${attribs}`) +
      (isLast ? ";" : ",")
    );
  },

  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlElement,
    coordTo: NodeCoordinate,
    nodeTo: XmlElement
  ): string {
    const idFrom = id(coordFrom, nodeFrom);
    const idTo = id(coordTo, nodeTo);
    return `\n${idFrom} => ${idTo};`;
  },
};

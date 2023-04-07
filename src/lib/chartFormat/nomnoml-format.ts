import { XmlElement } from "@rgrove/parse-xml";

import { ChartFormat, NodeCoordinate, formattedAttrVal } from "./";

export function id(coord: NodeCoordinate, node: XmlElement): string {
  return `${node.name} (${coord.position}, ${coord.level})`;
}

export function isControlChar(c: string): boolean {
  return "[]|".includes(c);
}

export function escapeControlChars(str: string): string {
  // See https://github.com/skanaar/nomnoml/issues/5
  return [...str].map((v) => `${isControlChar(v) ? "\\" : ``}${v}`).join(``);
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
        attribs +=
          ";" +
          attrKey +
          "=" +
          escapeControlChars(formattedAttrVal(attributes[attrKey]));
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

import { XmlNode } from "fsp-xml-parser";

import { ChartFormat } from "./base";

export function id (coord: [number, number]): string {
    return `${coord[0]}, ${coord[1]}`;
  };

export const format: ChartFormat = {
  chartHeader(): string {
    return "";
  },

  nodeDecl(id: string, node: XmlNode): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs += ";" + attrKey + "=" + attributes[attrKey];
      }
    }

    return `\n[${id}; ${node.name}${attribs}]`;
  },

  nodeConnection(idFrom: string, idTo: string): string {
    return `\n[${idFrom}]->[${idTo}]`;
  },
};

import { XmlNode } from "fsp-xml-parser";

import { ChartFormat } from "./base";

export const format: ChartFormat = {
  chartHeader(): string {
    return "stateDiagram-v2";
  },

  nodeDecl(id: string, node: XmlNode): string {
    let attribs = "";
    const attributes = node.attributes || {};
    for (const attrKey in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
        attribs += "\\n" + attrKey + "=" + attributes[attrKey];
      }
    }

    return `\n    ${id}: ${node.name}${attribs}`;
  },

  nodeConnection(idFrom: string, idTo: string): string {
    return `\n    ${idFrom}-->${idTo}`;
  },
};

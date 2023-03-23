import { XmlNode } from "fsp-xml-parser";

export function formattedAttrVal(val: string): string {
  if (val.length <= 13) {
    return val;
  } else {
    return `${val.substr(0, 5)}...${val.substr(val.length - 5)}`;
  }
}

export type NodeCoordinate = {
  level: number;
  position: number;
};

export interface ChartFormat {
  chartHeader(): string;
  nodeDecl(coord: NodeCoordinate, node: XmlNode): string;
  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlNode,
    coordTo: NodeCoordinate,
    nodeTo: XmlNode
  ): string;
}

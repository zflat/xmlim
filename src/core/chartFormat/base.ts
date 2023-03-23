import { XmlNode } from "fsp-xml-parser";

export function formattedAttrVal(val: string): string {
  return val.length <= 13 ? val : `${val.slice(0, 5)}...${val.slice(-5)}`;
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

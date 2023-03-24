import { XmlElement } from "@rgrove/parse-xml";

export function formattedAttrVal(val: string): string {
  return val.length <= 13 ? val : `${val.slice(0, 5)}...${val.slice(-5)}`;
}

export type NodeCoordinate = {
  level: number;
  position: number;
};

export interface ChartFormat {
  chartHeader(): string;
  nodeDecl(coord: NodeCoordinate, node: XmlElement): string;
  nodeConnection(
    coordFrom: NodeCoordinate,
    nodeFrom: XmlElement,
    coordTo: NodeCoordinate,
    nodeTo: XmlElement
  ): string;
}

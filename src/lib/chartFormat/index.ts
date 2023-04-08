import { XmlElement } from "@rgrove/parse-xml";

export function formattedAttrVal(val: string): string {
  return val.length <= 23 ? val : `${val.slice(0, 10)}...${val.slice(-10)}`;
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
  errorChart(error: string): string;
}

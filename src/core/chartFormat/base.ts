import { XmlNode } from "fsp-xml-parser";

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

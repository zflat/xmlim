import { XmlNode } from "fsp-xml-parser";

export type NodeCoordinate = {
  level: number;
  position: number;
};

export interface ChartFormat {
  chartHeader(): string;
  nodeDecl(id: string, node: XmlNode): string;
  nodeConnection(idFrom: string, idTo: string): string;
}

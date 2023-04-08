import * as fs from "node:fs";
import * as path from "node:path";

import * as nomnoml from "nomnoml";

import { Flags } from "@oclif/core";

import { chartFromXml } from "./convert";
import { format as nomnomlFormat } from "./chartFormat/nomnoml-format";
import { format as mermaidFormat } from "./chartFormat/mermaid-format";

export const watchFlags = {
  format: Flags.string({
    options: ["svg", "mermaid"],
    default: "svg",
    multiple: false,
    description: "Format of the output",
    required: false,
  }),
};

export async function genSingleFile(
  xmlFilePath: string,
  xml: string,
  format: string
): Promise<[string, boolean]> {
  if (format === "svg") {
    const [chart, success] = chartFromXml(xml, nomnomlFormat);
    const svg = nomnoml.renderSvg(chart);
    const outputPath = `${path.dirname(xmlFilePath)}/${path
      .basename(xmlFilePath)
      .split(".")
      .slice(0, -1)
      .join(".")}.svg`;
    fs.writeFile(outputPath, svg, (err) => {
      if (err !== null) {
        throw err;
      }
    });
    return ["", success];
  }

  if (format === "mermaid") {
    return chartFromXml(xml, mermaidFormat);
  }

  return ["", false];
}

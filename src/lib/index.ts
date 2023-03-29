import * as fs from "node:fs";
import * as path from "node:path";

import * as nomnoml from "nomnoml";
// import {IRenderOptions, render} from "state-machine-cat";

import { Flags } from "@oclif/core";

import { chartFromXml } from "./convert";
import { format as nomnomlFormat } from "./chartFormat/nomnoml-format";
import { format as mermaidFormat } from "./chartFormat/mermaid-format";
import { format as smcatFormat } from "./chartFormat/state-machine-cat-format";

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
): Promise<string> {
  if (format === "mermaid") {
    return chartFromXml(xml, mermaidFormat);
  }

  const outputPath = `${path.dirname(xmlFilePath)}/${path
    .basename(xmlFilePath)
    .split(".")
    .slice(0, -1)
    .join(".")}.svg`;

  let chart = "";
  let svg = "";

  if (format === "svg") {
    chart = chartFromXml(xml, smcatFormat);
    const smcat = require("state-machine-cat");
    svg = smcat.render(chart);
  }

  if (chart !== "" && svg !== "") {
    fs.writeFile(outputPath, svg, (err) => {
      if (err !== null) {
        throw err;
      }
    });
  }

  return "";
}

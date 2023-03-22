import * as fs from "node:fs";
import * as path from "node:path";

import * as nomnoml from "nomnoml";

import { Args, Command, Flags } from "@oclif/core";

import { chartFromXml } from "../../core/convert";
import { format as nomnomlFormat } from "../../core/chartFormat/nomnoml-format";

export default class Gen extends Command {
  static description = "Generate a diagram from a specified XML document";

  static examples = [
    `$ xmlim gen data.xml
`,
  ];

  static args = {
    file: Args.string({
      description: "Path to the XML document",
      required: true,
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Gen);
    const xml = fs.readFileSync(args.file, "utf8");
    const chart = chartFromXml(xml, nomnomlFormat);
    const svg = nomnoml.renderSvg(chart);
    const outputPath = `${path.dirname(args.file)}/${path
      .basename(args.file)
      .split(".")
      .slice(0, -1)
      .join(".")}.svg`;
    fs.writeFile(outputPath, svg, (err) => {
      if (err !== null) {
        // this.error("Error writing chart to " + outputPath);
      } else {
        this.log("Wrote chart to " + outputPath);
      }
    });
  }
}

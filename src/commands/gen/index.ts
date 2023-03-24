import * as fs from "node:fs";
import * as path from "node:path";

import * as nomnoml from "nomnoml";

import { Args, Command, Flags, ux } from "@oclif/core";

import { chartFromXml } from "../../core/convert";
import { format as nomnomlFormat } from "../../core/chartFormat/nomnoml-format";
import { format as mermaidFormat } from "../../core/chartFormat/mermaid-format";

export default class Gen extends Command {
  static description = "Generate a diagram from a specified XML document";

  static examples = [
    `$ xmlim gen data.xml
`,
  ];

  static flags = {
    format: Flags.string({
      options: ["mermaid", "svg"],
      default: "svg",
      multiple: false,
      description: "Format of the output",
      required: false,
    }),
  };

  static args = {
    file: Args.string({
      description: "Path to the XML document",
      required: true,
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Gen);
    const xml = fs.readFileSync(args.file, "utf8");

    if (flags.format === "svg") {
      ux.action.start("Generating diagram format");
      const chart = chartFromXml(xml, nomnomlFormat);
      ux.action.start("Rendering diagram");
      const svg = nomnoml.renderSvg(chart);
      ux.action.start("Saving diagram to file");
      const outputPath = `${path.dirname(args.file)}/${path
        .basename(args.file)
        .split(".")
        .slice(0, -1)
        .join(".")}.svg`;
      fs.writeFile(outputPath, svg, (err) => {
        if (err !== null) {
          throw err;
        }
      });
      ux.action.stop();
      this.log("Wrote chart to " + outputPath);
    } else if (flags.format === "mermaid") {
      this.log(chartFromXml(xml, mermaidFormat));
    }
  }
}

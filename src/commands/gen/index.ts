import * as fs from "node:fs";

import { Args, Command, Flags, ux } from "@oclif/core";

import { genSingleFile } from "../../lib";

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
    ux.action.start("Saving diagram to file");
    console.log(await genSingleFile(args.file, xml, flags.format));
    ux.action.stop();
  }
}

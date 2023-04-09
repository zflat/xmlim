import * as fs from "node:fs";

import { Args, Command, Flags } from "@oclif/core";

import { genSingleFile } from "../../lib";

export default class Gen extends Command {
  static description = "Generate a diagram from a specified XML document";

  static examples = ["<%= config.bin %> <%= command.id %> data.xml"];

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

    const { output, success, error } = await genSingleFile(
      args.file,
      xml,
      flags.format
    );

    if (output !== "") {
      this.log(output);
    } else if (success === false) {
      this.logToStderr(`Error parsing ${args.file} at ${new Date()}\n${error}`);
    } else {
      this.log("Saved diagram to file");
    }

    if (success === false) {
      this.exit(1);
    }
  }
}

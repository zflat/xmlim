import * as fs from "node:fs";

import { Args, Command, Flags } from "@oclif/core";

import { watchFlags, genSingleFile } from "../../lib";

export default class WatchFile extends Command {
  static description =
    "Watches the XML document and genertes a new diagram when the file changes";

  static examples = ["<%= config.bin %> <%= command.id %> data.xml"];

  static flags = watchFlags;

  static args = {
    file: Args.string({
      description: "Path to the XML document to watch",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(WatchFile);
    fs.watchFile(
      args.file,
      {
        bigint: false,
        persistent: true,
        interval: 2500,
      },
      async (curr, prev) => {
        const xml = fs.readFileSync(args.file, "utf8");
        const output = await genSingleFile(args.file, xml, flags.format);
        if (output !== "") {
          this.log(output);
        }
      }
    );
  }
}

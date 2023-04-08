import * as fs from "node:fs";

import { Stats } from "node:fs";

import { Args, Command, ux } from "@oclif/core";

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
    if (!fs.existsSync(args.file) || !fs.lstatSync(args.file).isFile()) {
      this.error(`Could not watch ${args.file} because it is not a file`);
      return;
    }

    const watchHandler = async (_curr: Stats, _prev: Stats) => {
      const xml = fs.readFileSync(args.file, "utf8");
      const [output, success] = await genSingleFile(
        args.file,
        xml,
        flags.format
      );
      if (output !== "") {
        this.log(output);
      } else if (success === false) {
        this.error(`Error parsing ${args.file} at ${new Date()}`);
      }

      if (flags.format !== "mermaid") {
        ux.action.start(`Processed ${args.file} at ${new Date()}`);
      }
    };

    fs.watchFile(
      args.file,
      {
        bigint: false,
        persistent: true,
        interval: 2500,
      },
      watchHandler
    );

    watchHandler(new Stats(), new Stats());

    if (flags.format !== "mermaid") {
      ux.action.start(`Watching ${args.file}`);
    }
  }
}

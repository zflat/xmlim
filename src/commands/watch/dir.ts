import * as fs from "node:fs";

import { Args, Command, Flags } from "@oclif/core";

import { watchFlags, genSingleFile } from "../../lib";

export default class WatchDir extends Command {
  static description =
    "Watches all *.xml documents in the directory and genertes a new diagram when a file changes";

  static examples = ["<%= config.bin %> <%= command.id %> data.xml"];

  static flags = watchFlags;

  static args = {
    dir: Args.string({
      description: "Path to the directory containing *.xml documents to watch",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(WatchDir);
    if( !fs.existsSync(args.dir) || !fs.lstatSync(args.dir).isDirectory() )
    {
      this.error(`Could not watch ${args.dir} because it is not a directory`);
      return;
    }
    fs.watch(
      args.dir,
      {
        encoding: "utf8",
        persistent: true,
      },
      async (eventType, filename: string) => {
        // const xml = fs.readFileSync(args.file, "utf8");
        // const output = await genSingleFile(args.file, xml, flags.format);
        // if (output !== "") {
        //   this.log(output);
        // }
      }
    );
  }
}

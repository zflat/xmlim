import * as fs from "node:fs";
import { readdir } from "node:fs/promises";
import * as path from "node:path";

import { Args, Command, ux } from "@oclif/core";

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
    if (!fs.existsSync(args.dir) || !fs.lstatSync(args.dir).isDirectory()) {
      this.error(`Could not watch ${args.dir} because it is not a directory`);
      return;
    }

    const watchHandler = async (eventType: string, file: string) => {
      if (eventType !== "change" || !xmlFiles.has(file)) {
        return;
      }

      const filePath = path.join(args.dir, file);
      const xml = fs.readFileSync(filePath, "utf8");
      const [output, success] = await genSingleFile(
        filePath,
        xml,
        flags.format
      );
      if (output !== "") {
        this.log(output);
      } else if (success === false) {
        this.logToStderr(`Error parsing ${file} at ${new Date()}`);
      } else {
        ux.action.start(`Processed ${file} at ${new Date()}`);
      }
    };

    const files = await readdir(args.dir);
    const xmlFiles = new Set(
      files.filter((file) => {
        return path.extname(file).toLowerCase() === ".xml";
      })
    );

    fs.watch(
      args.dir,
      {
        encoding: "utf8",
        persistent: true,
      },
      watchHandler
    );

    for (const file of files) {
      watchHandler("change", file);
    }

    if (flags.format !== "mermaid") {
      ux.action.start(`Watching ${args.dir}`);
    }
  }
}

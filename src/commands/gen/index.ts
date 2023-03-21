import * as fs from 'fs';
import { Args, Command, Flags } from "@oclif/core";
import {chartFromXml} from "../../core/convert";

import mermaidAPI from "mermaid";

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
    this.log(
      `gen ${args.file} (./src/commands/gen/index.ts)`
    );
    const xml = fs.readFileSync(args.file,'utf8');
    const chart = chartFromXml(xml);
    // const { svg, bindFunctions } = await mermaidAPI.render('id1', 'graph TD;A-->B');
    // const result = await mermaid.mermaidAPI.render('', chart);

    // this.log((await mermaidApi.render('', chart)).svg);
    // this.log(svg);
    // this.log(mermaidApi.getDiagramFromText)
  }
}

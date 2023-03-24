import { fileURLToPath } from "url";

import { expect, test } from "@oclif/test";

describe("gen", () => {
  test
    .stdout()
    .command([
      "gen",
      "--format",
      "mermaid",
      fileURLToPath("../../examples/example1.xml", import.meta.url),
    ])
    .it("runs hello cmd", (ctx) => {
      expect(ctx.stdout).to.contain("stateDiagram");
    });
});

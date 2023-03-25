import { expect, test } from "@oclif/test";

describe("watch:file", () => {
  test
    .stdout()
    .command(["watch:file"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.contain("hello world");
    });

  test
    .stdout()
    .command(["watch:file", "--name", "jeff"])
    .it("runs hello --name jeff", (ctx) => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});

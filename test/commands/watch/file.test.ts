import { expect, test } from "@oclif/test";

describe("watch:file", () => {
  test
    .stderr()
    .command(["watch:file", "/nota-a-path"])
    .catch((error) => {
      expect(error.message).to.contain("not a file");
    })
    .it("requires a valid xml file path");
});

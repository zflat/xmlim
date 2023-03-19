import { expect, test } from "@oclif/test";

import { parseXml } from "../../src/core/convert";

const xmlCaseA = "<A><B><C /></B></A>";

describe("convert:from_xml", () => {
  test.it("reads xml", (_ctx) => {
    expect(parseXml(xmlCaseA)).to.equal(true);
  });
});

import { expect, test } from "@oclif/test";

import { chartFromXml } from "../../src/core/convert";

const xmlCaseA = `<A><B name="1"><C /></B><B name="2"/></A>`;

describe("convert:chartFromXml", () => {
  test.it("reads xml", (_ctx) => {
    expect(chartFromXml(xmlCaseA)).to.equal(true);
  });
});

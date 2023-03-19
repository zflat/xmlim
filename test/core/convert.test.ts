import { expect, test } from "@oclif/test";

import { chartFromXml } from "../../src/core/convert";

const xmlCaseA = `
  <A>
    <B name="1">
      <C />
    </B>
    <B name="2"/>
  </A>
`;
const chartCaseA = `
stateDiagram-v2
    A_l0n0: A
    B_l1n0: B\\nname=1
    B_l1n1: B\\nname=2
    C_l2n0: C
    A_l0n0-->B_l1n0
    A_l0n0-->B_l1n1
    B_l1n0-->C_l2n0
`;

describe("convert:chartFromXml", () => {
  test.it("reads xml", (_ctx) => {
    expect(chartFromXml(xmlCaseA)).to.equal(chartCaseA.trim());
  });
});

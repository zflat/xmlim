import { expect, test } from "@oclif/test";

import { chartFromXml } from "../../src/core/convert";
import { format as mermaidFormat } from "../../src/core/chartFormat/mermaid-format";
import { format as nomnomlFormat } from "../../src/core/chartFormat/nomnoml-format";

const xmlCaseA = `
  <A>
    <B name="1">
      <C />
    </B>
    <B name="2"/>
  </A>
`;
const chartCaseAmmd = `
stateDiagram-v2
    A_l0n0: A
    B_l1n0: B\\nname=1
    B_l1n1: B\\nname=2
    C_l2n0: C
    A_l0n0-->B_l1n0
    A_l0n0-->B_l1n1
    B_l1n0-->C_l2n0
`;
const chartCaseAnommol = `
[A_l0n0; A]
[B_l1n0; B;name=1]
[B_l1n1; B;name=2]
[C_l2n0; C]
[A_l0n0]->[B_l1n0]
[A_l0n0]->[B_l1n1]
[B_l1n0]->[C_l2n0]
`;

describe("convert:chartFromXml", () => {
  test.it("reads xml", (_ctx) => {
    expect(chartFromXml(xmlCaseA, mermaidFormat)).to.equal(
      chartCaseAmmd.trim()
    );
  });
  test.it("reads xml", (_ctx) => {
    expect(chartFromXml(xmlCaseA, nomnomlFormat)).to.equal(
      chartCaseAnommol.trim()
    );
  });
});

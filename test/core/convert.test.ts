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
[A (0, 0)]
[B (0, 1);name=1]
[B (1, 1);name=2]
[C (0, 2)]
[A (0, 0)]->[B (0, 1)]
[A (0, 0)]->[B (1, 1)]
[B (0, 1)]->[C (0, 2)]
`;

describe("convert:chartFromXml", () => {
  test.it("formats as mermaid", (_ctx) => {
    expect(chartFromXml(xmlCaseA, mermaidFormat)).to.equal(
      chartCaseAmmd.trim()
    );
  });
  test.it("formats as nomnoml", (_ctx) => {
    expect(chartFromXml(xmlCaseA, nomnomlFormat)).to.equal(
      chartCaseAnommol.trim()
    );
  });
});

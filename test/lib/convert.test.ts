import { expect, test } from "@oclif/test";

import { chartFromXml } from "../../src/lib/convert";
import { format as mermaidFormat } from "../../src/lib/chartFormat/mermaid-format";
import { format as nomnomlFormat } from "../../src/lib/chartFormat/nomnoml-format";
import { format as smcatFormat } from "../../src/lib/chartFormat/state-machine-cat-format";

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

const chartCaseAstatemachinecat = `
p0l0 [label="A"],
p0l1 [label="B"]:
  name=1,
p1l1 [label="B"]:
  name=2,
p0l2 [label="C"];
p0l0 => p0l1;
p0l0 => p1l1;
p0l1 => p0l2;
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
  test.it("formats as state-machine-cat", (_ctx) => {
    expect(chartFromXml(xmlCaseA, smcatFormat)).to.equal(
      chartCaseAstatemachinecat.trim()
    );
  });
});

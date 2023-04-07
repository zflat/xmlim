import { expect, test } from "@oclif/test";

import { chartFromXml } from "../../src/lib/convert";
import { format as mermaidFormat } from "../../src/lib/chartFormat/mermaid-format";
import { format as nomnomlFormat } from "../../src/lib/chartFormat/nomnoml-format";

const xmlCase1 = `
  <A>
    <B name="1">
      <C />
    </B>
    <B name="2"/>
  </A>
`;
const chartCase1mmd = `
stateDiagram-v2
    A_l0n0: A
    B_l1n0: B\\nname=&#49
    B_l1n1: B\\nname=&#50
    C_l2n0: C
    A_l0n0-->B_l1n0
    A_l0n0-->B_l1n1
    B_l1n0-->C_l2n0
`;
const chartCase1nommol = `
[A (0, 0)]
[B (0, 1);name=1]
[B (1, 1);name=2]
[C (0, 2)]
[A (0, 0)]->[B (0, 1)]
[A (0, 0)]->[B (1, 1)]
[B (0, 1)]->[C (0, 2)]
`;

describe("convert:chartCase1FromXml", () => {
  test.it("formats as mermaid", (_ctx) => {
    expect(chartFromXml(xmlCase1, mermaidFormat)).to.equal(
      chartCase1mmd.trim()
    );
  });
  test.it("formats as nomnoml", (_ctx) => {
    expect(chartFromXml(xmlCase1, nomnomlFormat)).to.equal(
      chartCase1nommol.trim()
    );
  });
});

const xmlCase2NotValid = `
 <A>
   <B name="1">
 </A>
`;
describe("convert:chartCase2NotValidFromXml", () => {
  test.it("throws parse error", (_ctx) => {
    expect(() => chartFromXml(xmlCase2NotValid, nomnomlFormat)).to.throw();
  });
});

const xmlCase3AttributeEntities = `
<A>
  <B name="->1">
    <C />
  </B>
  <B name="]a:b[" />
</A>
`;
const chartCase3mmd = `
stateDiagram-v2
    A_l0n0: A
    B_l1n0: B\\nname=&#45&#62&#49
    B_l1n1: B\\nname=&#93&#97&#58&#98&#91
    C_l2n0: C
    A_l0n0-->B_l1n0
    A_l0n0-->B_l1n1
    B_l1n0-->C_l2n0
`;
const chartCase3nommol = `
[A (0, 0)]
[B (0, 1);name=->1]
[B (1, 1);name=\\]a:b\\[]
[C (0, 2)]
[A (0, 0)]->[B (0, 1)]
[A (0, 0)]->[B (1, 1)]
[B (0, 1)]->[C (0, 2)]
`;

describe("convert:chartCase3AttributesEntities", () => {
  test.it("formats as mermaid", (_ctx) => {
    expect(chartFromXml(xmlCase3AttributeEntities, mermaidFormat)).to.equal(
      chartCase3mmd.trim()
    );
  });
  test.it("formats as nomnoml", (_ctx) => {
    expect(chartFromXml(xmlCase3AttributeEntities, nomnomlFormat)).to.equal(
      chartCase3nommol.trim()
    );
  });
});

import React from "react";
import EffectiveDisplay from "../../components/effective-display/EffectiveDisplay";

function TestPage() {
  return (
    <div>
      <EffectiveDisplay>hello world</EffectiveDisplay>
      <EffectiveDisplay delay={170}>hello world</EffectiveDisplay>
      <EffectiveDisplay delay={340}>hello world</EffectiveDisplay>
    </div>
  );
}

export default TestPage;

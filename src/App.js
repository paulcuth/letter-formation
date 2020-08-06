import React from "react";
import Letter, { FORMS } from "./components/Letter";

function App() {
  return (
    <>
      <div>
        <Letter marks={FORMS.a} />
        <Letter marks={FORMS.b} />
        <Letter marks={FORMS.c} />
        <Letter marks={FORMS.d} />
        <Letter marks={FORMS.e} />
        <Letter marks={FORMS.f} />
        <Letter marks={FORMS.g} />
        <Letter marks={FORMS.h} />
        <Letter marks={FORMS.i} size="narrow" />
        <Letter marks={FORMS.j} />
        <Letter marks={FORMS.k} />
        <Letter marks={FORMS.l} />
        <Letter marks={FORMS.m} />
        <Letter marks={FORMS.n} />
        <Letter marks={FORMS.o} />
        <Letter marks={FORMS.p} />
        <Letter marks={FORMS.q} />
        <Letter marks={FORMS.r} />
        <Letter marks={FORMS.s} />
        <Letter marks={FORMS.t} />
        <Letter marks={FORMS.u} />
        <Letter marks={FORMS.v} />
        <Letter marks={FORMS.w} />
        <Letter marks={FORMS.x} />
        <Letter marks={FORMS.y} />
        <Letter marks={FORMS.z} />
      </div>
      <div>
        <Letter size="wide" />
      </div>
    </>
  );
}

export default App;

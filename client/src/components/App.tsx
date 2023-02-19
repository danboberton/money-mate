import React from "react";
import { Grommet, grommet, Heading } from "grommet";
import BudgetView from "./BudgetView";

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Heading level='1'>TypeScript Rocks</Heading>
        <BudgetView/>
    </Grommet>
  );
}

export default App;
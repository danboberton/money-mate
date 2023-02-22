import React from "react";
import { Grommet, grommet, Heading } from "grommet";
import BudgetView from "./BudgetView";
import { DashHeader } from "./dashboard/DashHeader";

import '../static/styles/components/dashboard/DashHeader.scss';

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <DashHeader/>
      <BudgetView/>
    </Grommet>
  );
}

export default App;
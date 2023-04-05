import React, { useState } from "react";
import { Grommet, grommet, Heading } from "grommet";
import BudgetView from "./BudgetView";
import { DashHeader } from "./dashboard/DashHeader";
import FooterComponent from "./footer/Footer"

import '../static/styles/components/dashboard/DashHeader.scss';
import { Dashboard } from "./dashboard/Dashboard";
import { defaultState } from "../utils/constants";

function App() {
  const [appState, setAppState] = useState(defaultState)
  return (
    <Grommet className="App" theme={grommet}>
      <Dashboard state={appState} setState={setAppState}/>
      <FooterComponent/>
    </Grommet>
  );
}

export default App;
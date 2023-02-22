import { Box } from "grommet";
import { AppState, SetAppState } from "../utils/AppState";
import BudgetView from "../components/BudgetView";
import { Dashhome } from "../components/dashboard/Dashhome";


interface ModuleViewControllerProps{
    state: AppState,
    setState: SetAppState
}

export function ModuleViewController({state, setState}: ModuleViewControllerProps) {
    switch(state.nav){
        case "":
            return (
                <Box>
                    <Dashhome state={state} setState={setState}/>
                </Box>
            );
        case "budget":
            return (
                <Box>
                    <BudgetView/>
                </Box>
            );
        case "settings":
            return (
                <Box>

                </Box>
            );
        case "profile":
            return (
                <Box>

                </Box>
            );
    }
}
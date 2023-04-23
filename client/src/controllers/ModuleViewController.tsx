import { Box } from "grommet";
import { AppState, SetAppState } from "../utils/AppState";
import BudgetView from "../components/BudgetView";
import AboutPage from "../components/about/About";


interface ModuleViewControllerProps{
    state: AppState,
    setState: SetAppState
}

export function ModuleViewController({state, setState}: ModuleViewControllerProps) {
    switch(state.nav){
        case "budget":
            return (
                <Box>
                    <BudgetView/>
                </Box>
            );
        case "settings":
            return (
                <Box alignSelf="center">
                   No Settings
                </Box>
            );
        case "profile":
            return (
                <Box>
                  No profile
                </Box>
            );
        case "about":
            return (
                <Box>
                    <AboutPage/>
                </Box>
            );
    }
}
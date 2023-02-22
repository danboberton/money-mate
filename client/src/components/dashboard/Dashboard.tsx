import { Box } from "grommet";
import { DashHeader } from "./DashHeader";
import { ModuleViewController } from "../../controllers/ModuleViewController";
import { AppState, SetAppState } from "../../utils/AppState";


interface DashboardProps{
    state: AppState,
    setState: SetAppState
}

export function Dashboard({state, setState}: DashboardProps) {
    return(
    <Box>
        <DashHeader state={state} setState={setState}/>
        <ModuleViewController state={state} setState={setState}/>
    </Box>
    );
}
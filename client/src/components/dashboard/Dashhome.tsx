import { Box, Button } from "grommet";
import { AppState, SetAppState, setAppView } from "../../utils/AppState";


interface DashhomeProps{
    state: AppState,
    setState: SetAppState
}

export function Dashhome({state, setState}: DashhomeProps){
    return (
        <Box>
            Welcome to Money mate
            <Box height='small' width='small'>
            <Button
              label="Budget"
              onClick={() => setAppView(state, setState, "budget")}
            />
            </Box>
        </Box>
    );
}
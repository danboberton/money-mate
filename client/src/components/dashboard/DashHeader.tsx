import { Anchor, Avatar, Box, Header, Heading, Menu, Nav } from "grommet";
import { User, SettingsOption } from "grommet-icons";
import { Menu as MenuIcon } from  "grommet-icons"
import { AppState, SetAppState, setAppView } from "../../utils/AppState";


interface DashHeaderProps{
  state: AppState,
  setState: SetAppState
}

export function DashHeader({state, setState}: DashHeaderProps){

  return(
    <Header 
      background="light-3" 
      pad="small"
    >
      <Box>
      </Box>
      <Box
        className='DashTitle'
        onClick={() => setAppView(state, setState, "")}
      >
        Money Mate
      </Box>
      <Menu
        alignSelf='center'
        icon={<MenuIcon/>}
        margin="small"
        items={[
          { label: 'Home', onClick: () => setAppView(state, setState, "") },
          { label: 'Budget', onClick: () => setAppView(state, setState, "budget")},
          { label: 'Profile', onClick: () => setAppView(state, setState, "profile")},
          { label: 'About', onClick: () => setAppView(state, setState, "about")},
          { label: 'Settings', onClick: () => setAppView(state, setState, "settings")}
      ]}
      />
    </Header>
  );
}
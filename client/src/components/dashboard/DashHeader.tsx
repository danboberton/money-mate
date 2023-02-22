import { Anchor, Avatar, Box, Header, Heading, Menu, Nav } from "grommet";
import { User, SettingsOption } from "grommet-icons";
import { Menu as MenuIcon } from  "grommet-icons"



export function DashHeader(){

  return(
    <Header 
      background="light-3" 
      pad="small"
    >
      <Box>
      </Box>
      <Box
        className='DashTitle'
      >
        Money Mate
      </Box>
      <Menu
        alignSelf='center'
        icon={<MenuIcon/>}
        margin="small"
        items={[
          { label: 'Profile', onClick: () => {} },
          { label: 'Settings', onClick: () => {} },
      ]}
      />
    </Header>
  );
}
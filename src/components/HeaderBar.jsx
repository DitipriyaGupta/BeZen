
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <DescriptionIcon sx={{color:'#E83A59',fontSize:'6vh',borderColor:"black",}}/>
        <Heading >Notes</Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;
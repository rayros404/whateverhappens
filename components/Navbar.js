import { AppBar, Box, Container, Toolbar, Typography, Button, IconButton  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
    <Container>
      <AppBar position="static" className="background">
        <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Box sx={{flex: 1, textAlign:"left"}}>
            <IconButton className="accentColor">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{flex: 1, textAlign:"center"}}>
          <Typography variant="h5" className="titleText textSecondary">
            whateverhappens
          </Typography>
          </Box>
          <Box sx={{flex: 1, textAlign:"right"}}>
            <IconButton className="accentColor">
              <AccountCircleIcon />
            </IconButton>
            <IconButton className="accentColor">
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Navbar
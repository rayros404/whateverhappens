import { AppBar, Box, Container, Toolbar, Typography, Button, IconButton, CssBaseline  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Socials from "./Socials"


const Navbar = () => {
  return (
    <Container>
      <AppBar position="static" elevation={1} className="background">
        <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Box sx={{flex: 1, textAlign:"left"}}>
            <Socials/>
          </Box>
          <Box sx={{flex: 1, textAlign:"center"}}>
          <Typography variant="h5" className="titleText textSecondary" sx={{fontWeight: "bold", letterSpacing: "6px", fontSize:"30px"}}>
            WHATEVERHAPPENS
          </Typography>
          </Box>
          <Box sx={{flex: 1, textAlign:"right"}}>
            <IconButton className="accentColor" >
              <AccountCircleIcon/>
            </IconButton>
            <IconButton className="accentColor">
              <ShoppingBagIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Navbar
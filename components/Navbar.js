import { AppBar, Box, Toolbar, Typography, Button, IconButton  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import COLORS from "../styles/colors"


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, width:"100%"}}>
        <AppBar position="sticky" style={{backgroundColor: COLORS.background}}>
            <Toolbar>
                <IconButton
                    style={{color: COLORS.accent}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    sx={{mr: "auto",}}
                    style={{color: COLORS.secondary, fontFamily: "Oswald", fontSize:"1.3rem"}}
                    variant="h5"
                >
                    whateverhappenshappens.
                </Typography>
                <IconButton
                    style={{color: COLORS.accent}}
                    sx={{ml: "auto"}}
                >
                    <AccountCircleIcon />
                </IconButton>
                <IconButton
                    style={{color: COLORS.accent}}
                >
                    <ShoppingBagIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
import { AppBar, Box, Toolbar, Typography, Button, IconButton  } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import COLORS from "../styles/colors"


const Navbar = () => {
  return (
    // <Box sx={{ flexGrow: 1}}>
        <AppBar position="sticky" style={{backgroundColor: COLORS.background}}>
            <Toolbar>
                <IconButton
                    style={{color: COLORS.accent}}
                    sx={{mr: 3}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    sx={{mr: "auto"}}
                    style={{color: COLORS.secondary, fontFamily: "Oswald"}}
                    variant="h6"
                >
                    whateverhappenshappens.
                </Typography>
                <IconButton
                    style={{color: COLORS.accent}}
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
    // </Box>
  )
}

export default Navbar
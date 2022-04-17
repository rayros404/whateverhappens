import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, CardActionArea } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import COLORS from "../styles/colors";
import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
    const [show, setShow] = useState(false)

    return (
    <Box sx={{maxWidth: 1/4, minWidth: 200, position:"relative"}}  onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://media-photos.depop.com/b0/21750200/1211699845_fd4690a7060243d0b571796f1a0b125e/P0.jpg"
                />
                <CardContent style={{backgroundColor: COLORS.foreground}}>
                
                    <Typography variant="body2" style={{color: COLORS.primary}}>
                        Levi's Orange Tab Shorts
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Typography 
                            variant="h5"
                            style={{color: COLORS.primary, fontFamily: "Oswald"}}
                        >
                            $50.00
                        </Typography>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        {show && <Box className={styles.overlay}>
            <Button
                variant="contained"
                style={{backgroundColor: COLORS.accent, opacity:"95%"}}
            >
                <Typography noWrap>Add to Bag</Typography>
            </Button>
        </Box>}
    </Box>
  )
}

export default ProductCard
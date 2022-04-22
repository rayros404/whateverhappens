import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, CardActionArea } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import COLORS from "../styles/colors";
import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
    const [show, setShow] = useState(false)

    return (
    <Box 
        sx={{width:"30%", position:"relative",}}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
    >
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://media-photos.depop.com/b0/21750200/1211699845_fd4690a7060243d0b571796f1a0b125e/P0.jpg"
                />
                <CardContent 
                    style={{backgroundColor: COLORS.foreground}}
                >
                    <Typography 
                        variant="body2" 
                        style={{color: COLORS.primary}}
                        gutterBottom
                    >
                        Levi's Orange Tab Shorts
                    </Typography>
                    <Box 
                        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}
                    >
                        <Typography 
                            variant="h4"
                            style={{color: COLORS.primary, fontFamily: "Oswald"}}
                        >
                            $50.00
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        {show && <Box className={styles.overlay}>
            <Button
                variant="contained"
                style={{backgroundColor: COLORS.accent, opacity:"95%"}}
                className={styles.overlayBagBtn}
            >
                <Typography noWrap>Add to Bag</Typography>
            </Button>
            <IconButton 
                className={styles.overlayFavoriteBtn}
                style={{ color: "white", backgroundColor: ""}}
            >
                <FavoriteBorderIcon/>
            </IconButton>
        </Box>}
    </Box>
  )
}

export default ProductCard
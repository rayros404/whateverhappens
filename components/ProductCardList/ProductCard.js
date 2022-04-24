import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import styles from './ProductCardList.module.css'

const ProductCard = (props) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://media-photos.depop.com/b0/21750200/1211699845_fd4690a7060243d0b571796f1a0b125e/P0.jpg"
          />
          <Typography className={`titleText ${styles.cardTitle}`}>{props.title}</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard
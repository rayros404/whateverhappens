import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import styles from './ProductCardList.module.css'

const ProductCard = (props) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.img}
          />
          <Typography className={`titleText ${styles.cardTitle}`}>{props.title}</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard
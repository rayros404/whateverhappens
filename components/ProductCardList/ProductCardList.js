import React from 'react'
import ProductCard from './ProductCard'
import styles from './ProductCardList.module.css'
import { Grid } from "@mui/material"

const ProductCardList = () => {
  return (
    <Grid container spacing={2} sx={{mb: 2}}>
      <ProductCard 
        title="New" 
        img="https://media-photos.depop.com/b0/21750200/1170024057_1b71f0951c8b4eedaf2cab63087a0574/P0.jpg"
      />
      <ProductCard 
        title="Sale" 
        img="https://media-photos.depop.com/b0/21750200/1195057942_814b4e733a054b1bb3b19899dab7d304/P0.jpg"
      />
      <ProductCard 
        title="Explore" 
        img="https://media-photos.depop.com/b0/21750200/1191397536_13075cb6acad426fa7ecc9fe1061a130/P0.jpg"
      />
    </Grid>
  )
}

export default ProductCardList
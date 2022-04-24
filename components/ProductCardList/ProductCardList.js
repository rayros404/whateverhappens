import React from 'react'
import ProductCard from './ProductCard'
import styles from './ProductCardList.module.css'
import { Grid } from "@mui/material"

const ProductCardList = () => {
  return (
    <Grid container spacing={2} sx={{mb: 2}}>
      <ProductCard title="New"/>
      <ProductCard title="Sale"/>
      <ProductCard title="Explore"/>
    </Grid>
  )
}

export default ProductCardList
import React from 'react'
import ProductCard from './ProductCard'
import { Typography, Grid } from '@mui/material'

const ProductList = (props) => {
  return (
    <>
    <Typography variant='h4' className='titleText textSecondary' gutterBottom>Featured</Typography>
    <Grid container spacing={2} >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Grid>
    </>
  )
}

export default ProductList
import React from 'react'
import FeaturedCard from './FeaturedCard'
import { Typography, Grid } from '@mui/material'
import { allProducts } from "../../public/data"


const FeaturedList = (props) => {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  const featuredProducts = allProducts.filter(product => (product.featured))
  const featuredCards = featuredProducts.map(product => (
    <FeaturedCard 
      key={product.id}
      img={product.imgs[0]}
      title={product.title}
      price={product.price}  
    />
  ))

  return (
    <>
      <Typography variant='h4' className='titleText textSecondary' gutterBottom>FEATURED</Typography>
      <Grid container spacing={2} >
        {featuredCards}
      </Grid>
    </>
  )
}

export default FeaturedList
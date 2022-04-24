import React from 'react'
import FeaturedCard from './FeaturedCard'
import { Typography, Grid } from '@mui/material'

const FeaturedList = (props) => {
  return (
    <>
      <Typography variant='h4' className='titleText textSecondary' gutterBottom>FEATURED</Typography>
      <Grid container spacing={2} >
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Grid>
    </>
  )
}

export default FeaturedList
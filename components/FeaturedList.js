import CollectionCard from './CollectionCard'
import { Typography, Grid } from '@mui/material'
import { allProducts } from "../public/data"

const FeaturedList = (props) => {
  const featuredProducts = allProducts.filter(product => (product.featured))
  const CollectionCards = featuredProducts.map(product => (
    <CollectionCard 
      key={product.id}
      img={product.imgs[0]}
      title={product.title}
      price={product.price}  
    />
  ))
  return (
    <>
      <Typography variant='h4' className='titleText textSecondary' sx={{marginTop: "30px"}} gutterBottom>FEATURED</Typography>
      <Grid container spacing={2} >
        {CollectionCards}
      </Grid>
    </>
  )
}

export default FeaturedList
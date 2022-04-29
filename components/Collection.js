import CollectionCard from './CollectionCard'
import { Typography, Grid } from '@mui/material'
import { allProducts } from "../public/data"

const Collection = () => {
  const CollectionCards = allProducts.map(product => (
    <CollectionCard 
      key={product.id}
      img={product.imgs[0]}
      title={product.title}
      price={product.price}  
    />
  ))
  return (
    <>
      <Grid container spacing={2} >
        {CollectionCards}
      </Grid>
    </>
  )
}

export default Collection
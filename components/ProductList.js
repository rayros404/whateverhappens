import React from 'react'
import ProductCard from './ProductCard'
import { Box, Container, Typography } from '@mui/material'
import COLORS from "../styles/colors"

const ProductList = () => {
    return (
        <Container sx={{ display:"flex", flexDirection:"column", alignItems:"center", my:3}}>
            <Typography className="titleText" variant="h4" style={{fontSize:"1.2rem"}} sx={{color:COLORS.primary, my:2}} gutterBottom>
                Bottoms
            </Typography>
            <Container sx={{ display:"flex", justifyContent:"space-evenly",}}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Container>
        </Container>
            

    )
}

export default ProductList
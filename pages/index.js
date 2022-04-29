import styles from '../styles/Home.module.css'
import ProductCardList from "../components/ProductCardList/ProductCardList"
import FeaturedList from '../components/FeaturedList'
import Banner from '../components/Banner/Banner'
import NavLinkList from '../components/NavLinkList/NavLinkList'
import Footer from '../components/Footer/Footer'

import { Container } from "@mui/material"

const Home = () => {
  return (
    <>
      <Container>
        <NavLinkList/>
        <Banner/>
        <ProductCardList/>
        <FeaturedList/>
      </Container>
    </>
  )
}

export default Home
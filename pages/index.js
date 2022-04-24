import styles from '../styles/Home.module.css'
import ProductCardList from "../components/ProductCardList/ProductCardList"
import FeaturedList from '../components/FeaturedList/FeaturedList'
import { Container } from "@mui/material"

const Home = () => {
  return (
    <>
      <Container>
        <ProductCardList/>
        <FeaturedList/>
      </Container>
    </>
  )
}

export default Home
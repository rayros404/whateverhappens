import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'
import { Container } from "@mui/material"

const Home = () => {
  return (
    <>
      <Container>
        <ProductList/>
      </Container>
    </>
  )
}

export default Home
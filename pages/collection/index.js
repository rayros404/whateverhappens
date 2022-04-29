import { Container, Grid } from "@mui/material"
import Collection from "../../components/Collection"
import Filter from "../../components/Filter"

const collection = () => {
  return (
    <Container>
      <Filter />
      <Collection />
    </Container>
  )
}

export default collection
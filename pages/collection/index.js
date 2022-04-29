import { Container, Grid, Stack } from "@mui/material"
import Collection from "../../components/Collection"
import Filter from "../../components/Filter"
import Collectioncrumbs from "../../components/Collectioncrumbs"

const collection = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{my:3}}>
        <Collectioncrumbs />
        <Filter />
      </Stack>
      <Collection category=""/>
    </Container>
  )
}

export default collection
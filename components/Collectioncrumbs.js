import { Breadcrumbs, Link, Typography } from "@mui/material"

const Collectioncrumbs = () => {
  return (
    <div>
      <Breadcrumbs>
        <Link className="textPrimary titleText" underline="hover" href="/">
          Home
        </Link>
        <Link className="textPrimary titleText"underline="hover" href="collection">
          Collection
        </Link>
      </Breadcrumbs>
    </div>
  )
}

export default Collectioncrumbs
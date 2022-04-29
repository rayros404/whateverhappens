import { Grid, Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material"

const CollectionCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={3} >
      <Card className="foreground" >
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.img}
          />
          <CardContent>
            <Typography 
              variant="h6"
              className="textPrimary"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Box>
              <Typography variant="h4" className="titleText textPrimary">
                ${props.price}.00
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default CollectionCard
import { Grid, Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material"

const FeaturedCard = () => {
  return (
    <Grid item xs={12} sm={6} md={3} >
      <Card className="foreground">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://media-photos.depop.com/b0/21750200/1211699845_fd4690a7060243d0b571796f1a0b125e/P0.jpg"
          />
          <CardContent>
            <Typography 
              variant="h6"
              className="textPrimary"
              gutterBottom
            >
              Levi's Orange Tab Shorts
            </Typography>
            <Box>
              <Typography variant="h4" className="titleText textPrimary">
                $50.00
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default FeaturedCard
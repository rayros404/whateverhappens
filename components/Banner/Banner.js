import { Card, CardMedia, CardActionArea, Typography, Button } from '@mui/material'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <Card className={styles.bannerContainer}>
      <CardActionArea className={styles.bannerWrapper}>
        <CardMedia
          component="img"
          // image="https://i.ibb.co/2tVjZXj/banner-Img.jpg"
          image="https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className={styles.bannerImg}
        />
        <div className={styles.bannerInfo}>
          <Typography className={styles.bannerTypo}>Trending</Typography>
          <Typography className={styles.bannerTypo}>Secondhand</Typography>
          <Typography className={styles.bannerTypo}>Apparel</Typography>
          <div>
            <Typography className={styles.shopNow}>Shop Now</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  )
}

export default Banner
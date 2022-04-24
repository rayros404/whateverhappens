import { Card, CardMedia } from '@mui/material'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <Card className={styles.bannerContainer}>
      <CardMedia
        component="img"
        image="https://i.ibb.co/2tVjZXj/banner-Img.jpg"
        className={styles.bannerImg}
      />
    </Card>
  )
}

export default Banner
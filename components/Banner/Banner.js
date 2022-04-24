import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './Banner.module.css'
import bannerImg from './bannerImg.jpg'
import Image from "next/image"

const Banner = () => {
  return (
    <Container className={styles.bannerContainer}>
      <Container>
        <Image 
          src={bannerImg}
          height={500}
          width={500}
          />
      </Container>
      <Container className={styles.bannerInfo}>
        <Typography>Premium</Typography>
        <Typography>Second Hand</Typography>
        <Typography>Apparel</Typography>
      </Container>
    </Container>
  )
}

export default Banner
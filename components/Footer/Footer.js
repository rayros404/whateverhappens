import styles from "./Footer.module.css"
import { Container, Typography, Grid } from "@mui/material"
import Socials from "../Navbar/Socials"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <div className={`${styles.container} foreground`}>
      <Container sx={{display:"flex"}}>
        <div className={`${styles.content} ${styles.left}`}>
          <Typography variant="h5" className="titleText textPrimary" sx={{fontWeight: "bold", letterSpacing: "6px", fontSize:"30px"}} gutterBottom>
            WHATEVERHAPPENS
          </Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci sunt, quis rem maiores doloribus tempora, nostrum tempore aperiam veritatis</Typography>
        </div>
        <div className={`${styles.content} ${styles.center}`}>
          <Container>
          <Typography variant="h6" className="titleText textPrimary" gutterBottom>Shop</Typography>
          <div className={styles.wrapper}>
            <ul style={{display:"flex", flexDirection:"column", flexWrap:"wrap", height:"100px"}}>
              <FooterLink title="All"/>
              <FooterLink title="New"/>
              <FooterLink title="Sale"/>
              <FooterLink title="Tops"/>
              <FooterLink title="Bottoms"/>
              <FooterLink title="Dresses"/>
              <FooterLink title="Intimates"/>
              <FooterLink title="Shoes"/>
              <FooterLink title="Accessories"/>
            </ul>
          </div>
          </Container>
        </div>
        
        <div className={`${styles.content} ${styles.right}`}>
          <Container>
          <Typography variant="h6" className="titleText textPrimary">Contact</Typography>
          
            <Socials />

          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Footer
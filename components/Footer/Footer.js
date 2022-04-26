import styles from "./Footer.module.css"
import { Container, Typography, Grid } from "@mui/material"
import Socials from "../Navbar/Socials"
import FooterLink from "./FooterLink"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer className={`foreground ${styles.footer}`}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" className="titleText textPrimary" gutterBottom>Info</Typography>
              <ul>
                <FooterLink title="About"/>
                <FooterLink title="FAQ"/>
                <FooterLink title="Shipping"/>
                <FooterLink title="Returns"/>
                <FooterLink title="Terms of Service"/>
                <FooterLink title="Privacy Policy"/>
                <FooterLink title="Cookie Policy"/>
              </ul>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" className="titleText textPrimary" gutterBottom>Shop</Typography>
              <ul>
                <FooterLink title="All"/>
                <FooterLink title="New"/>
                <FooterLink title="Sale"/>
                <FooterLink title="Tops"/>
                <FooterLink title="Bottoms"/>
                <FooterLink title="Dresses"/>
                <FooterLink title="Intimates"/>
                <FooterLink title="Shoes"/>
                <FooterLink title="Acccessories"/>
              </ul>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" className="titleText textPrimary" gutterBottom>Contact</Typography>
              <div style={{display:"flex", alignItems:"center"}}>
                <EmailIcon className="textPrimary"/>
                <Typography 
                  variant="h6"
                  className="titleText textPrimary" 
                  sx={{marginLeft:"10px"}}
                  gutterBottom
                >
                  joebruin@ucla.edu
                </Typography>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <LocalPhoneIcon className="textPrimary"/>
                <Typography 
                  variant="h6"
                  className="titleText textPrimary" 
                  sx={{marginLeft:"10px"}}
                  gutterBottom
                >
                  (123) 456-7890
                </Typography>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <LocationOnIcon className="textPrimary"/>
                <Typography 
                  variant="h6"
                  className="titleText textPrimary" 
                  sx={{marginLeft:"10px"}}
                  gutterBottom
                >
                  12345 Six St, Los Angeles 78910
                </Typography>
              </div>
              <Socials/>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
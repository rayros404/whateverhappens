import { Link, Grid } from "@mui/material"
import styles from "./Footer.module.css"


const FooterLink = (props) => {
  return (
    <li className={styles.link}>
      <Link href="#" underline="hover" className="textPrimary">
        {props.title}
      </Link>
    </li>
  )
}

export default FooterLink
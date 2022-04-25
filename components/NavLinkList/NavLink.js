import { Link } from "@mui/material"
import styles from "./NavLinkList.module.css"

const NavLink = (props) => {
  return (
    <Link href="#" underline="hover" className={`titleText ${styles.link}`}>
      {props.title}
    </Link>
  )
}

export default NavLink
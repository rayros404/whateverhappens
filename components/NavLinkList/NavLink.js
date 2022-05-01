import Link from "next/link"
import styles from "./NavLinkList.module.css"
import { Link as MuiLink } from "@mui/material"

const NavLink = (props) => {
  return (
    <Link href={props.route}>
    <MuiLink href={props.route} underline="hover" className={`titleText ${styles.link}`}>
      {props.title}
    </MuiLink>
    </Link>
  )
}

export default NavLink
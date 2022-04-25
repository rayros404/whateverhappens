import NavLink from "./NavLink"
import styles from "./NavLinkList.module.css"


const NavLinkList = () => {
  return (
    <div className={styles.container}>
      <NavLink title="ALL"/>
      <NavLink title="NEW"/>
      <NavLink title="SALE"/>
      <NavLink title="TOPS"/>
      <NavLink title="BOTTOMS"/>
      <NavLink title="DRESSES"/>
      <NavLink title="INTIMATES"/>
      <NavLink title="SHOES"/>
      <NavLink title="ACCESSORIES"/>
    </div>
  )
}

export default NavLinkList
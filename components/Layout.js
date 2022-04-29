import Navbar from "./Navbar/Navbar"
import NavLinkList from "./NavLinkList/NavLinkList"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavLinkList/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
import { CssBaseline } from "@mui/material"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
        <CssBaseline />
        <Navbar />
        {children}
    </>
  )
}

export default Layout
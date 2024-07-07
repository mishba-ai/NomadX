import Navbar from "./components/Navbar.jsx"
import {Outlet} from "react-router-dom"

function Layout() {
  return (
    <div className="">
       <Navbar/>
       <Outlet/>
    </div>
  )
}

export default Layout
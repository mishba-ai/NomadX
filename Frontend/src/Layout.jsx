import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" flex bg-[rgb(28,28,28)]  w-full ">
      <div className="  z-10" style={{position:'sticky',top:'0'}}>
        <Navbar />
      </div>
      <div className="w-full h-screen ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

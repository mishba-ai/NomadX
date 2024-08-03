import Navbar from "../../components/settings/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Setting() {
  return (
    <>
      <div className="min-w-screen h-auto">
        <div className="flex  h-full">
          <Navbar />
          <Outlet /> 
        </div>
      </div>
    </>
  );
}

export default Setting;

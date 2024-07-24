import suitcase from "../assets/svg/Navbar/suitcase.svg";
import Community from "../assets/svg/Navbar/community.svg";
import logout from "../assets/svg/Navbar/logout.svg";
import search from "../assets/svg/Navbar/search.svg";
import settings from "../assets/svg/Navbar/settings.svg";
import image from "../assets/svg/Navbar/image.svg";
import calendar from "../assets/svg/Navbar/calendar.svg";
import Tooltip from "./Tooltip";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isCurrentPath = (path) => {
    return location.pathname === path; // Check if the current path is the same as the given path
  };
  return (
    <nav
      className="w-16 h-screen border-r border-gray-800 bg-[#000000]  fixed top-0 rounded-r-2xl "
      style={{}}
    >
      <div className="flex flex-col py-3 px-4   h-screen justify-between items-center">
        <div className="flex flex-col">
          <NavLink to={""}>
            <button className="w-8 h-8 rounded-full bg-[#d1d5db] z-50">
              <img
                src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png"
                className="w-8 h-8 rounded-full "
                alt="profile"
              />
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col gap-y-6">
          {" "}
          <NavLink to="/home">
            <Tooltip text={"Dashboard"}>
              <button
                className={`${isCurrentPath("/home") ? "w-8 h-8 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15  flex justify-center items-center rounded-lg"}`}
              >
                {" "}
                <img src={suitcase} alt="" />
              </button>
            </Tooltip>
          </NavLink>
          <NavLink to="">
            <Tooltip text={"Calendar"}>
              <button  className={`${isCurrentPath("/Calendar") ? "w-8 h-8 p-1 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15 p-1 flex justify-center items-center rounded-lg"}`}>
                <img src={calendar} alt="" />
              </button>
            </Tooltip>
          </NavLink>
          <NavLink to="/Forum">
            <Tooltip text={"Forum"}>
              <button  className={`${isCurrentPath("/Forum") ? "w-8 h-8 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15  flex justify-center items-center rounded-lg"}`}>
                <img src={Community} alt="" />
              </button>
            </Tooltip>
          </NavLink>
          <NavLink to={"/settings/profile"}>
            <Tooltip text={"settings"}>
              <button  className={`${isCurrentPath("/settings/profile") ? "w-8 h-8 p-1 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15 p-1 flex justify-center items-center rounded-lg"}`}>
                <img src={settings} alt="" />
              </button>
            </Tooltip>
          </NavLink>
          <NavLink to={"/search"}>
            <Tooltip text={"Search"}>
              <button  className={`${isCurrentPath("/search") ? "w-8 h-8 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15  flex justify-center items-center rounded-lg"}`}>
                <img src={search} alt="" />
              </button>
            </Tooltip>
          </NavLink>
          <NavLink to="/lens">
            <Tooltip text={"Lens"}>
              <button  className={`${isCurrentPath("/Lens") ? "w-8 h-8 p-1 flex justify-center bg-sky-200 bg-opacity-20  items-center rounded-lg " : "w-8 h-8 hover:bg-slate-300 hover:bg-opacity-15 p-1 flex justify-center items-center rounded-lg"}`}>
                <img src={image} alt="" />
              </button>
            </Tooltip>
          </NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink>
            <Tooltip text={"Logout"}>
              <button className="w-8 h-8 p-1 hover:bg-slate-300 hover:bg-opacity-15 flex justify-center items-center rounded-lg">
                <img src={logout} alt="" />
              </button>
            </Tooltip>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

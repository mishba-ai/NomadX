import suitcase from "../assets/svg/Navbar/suitcase.svg";
import Community from "../assets/svg/Navbar/community.svg";
import logout from "../assets/svg/Navbar/logout.svg";
import search from "../assets/svg/Navbar/search.svg";
import settings from "../assets/svg/Navbar/settings.svg";
import image from "../assets/svg/Navbar/image.svg";
import calendar from "../assets/svg/Navbar/calendar.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-16 h-screen border-gray-800 bg-[#000000]  fixed top-0 rounded-r-2xl " style={{}}>
      <div className="flex flex-col py-3 px-4   h-screen justify-between items-center">
      <div className="flex flex-col">
        <NavLink to={""}>
          <button className="w-8 h-8 rounded-full bg-[#d1d5db]">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png"
              className="w-8 h-8 rounded-full "
              alt=""
            />
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col gap-y-6">
        {" "}
        <NavLink to={""}>
          <button className="w-6 h-6">
            {" "}
            <img src={suitcase} alt="" />
          </button>
        </NavLink>
        <NavLink to="">
          <button className="w-6 h-6">
            <img src={calendar} alt="" />
          </button>
        </NavLink>
        <NavLink to="/Forum">
          <button className="w-6 h-6">
            <img src={Community} alt="" />
          </button>
        </NavLink>
        <NavLink to={"/Setting"}>
          <button className="w-6 h-6">
            <img src={settings} alt="" />
          </button>
        </NavLink>
        <NavLink to={"/search"}>
          <button className="w-6 h-6">
            <img src={search} alt="" />
          </button>
        </NavLink>
        <NavLink to="/lens">
          <button className="w-6 h-6">
            <img src={image} alt="" />
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink>
          <button className="w-6 h-6">
            <img src={logout} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;

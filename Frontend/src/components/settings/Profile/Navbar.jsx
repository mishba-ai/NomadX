import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex  flex-col justify-center items-center">
        <ul className="flex text-gray-400 text-lg gap-x-4 ">
          <NavLink
            to={"/settings/profile/contact"}
            className={({ isActive }) => (isActive ? "text-sky-200" : "")}
          >
            <li>contact</li>
          </NavLink>
          <NavLink
            to={"/settings/profile/about"}
            className={({ isActive }) => (isActive ? "text-sky-200" : "")}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to={"/settings/profile/discussion"}
            className={({ isActive }) => (isActive ? "text-sky-200" : "")}
          >
            <li>Discussion</li>
          </NavLink>
          <NavLink
            to={"/settings/profile/travel"}
            className={({ isActive }) => (isActive ? "text-sky-200" : "")}
          >
            <li>Travel</li>
          </NavLink>
        </ul>
        <hr className="border-gray-500 border w-[18rem] mt-1" />
      </div>
    </div>
  );
}

export default Navbar;

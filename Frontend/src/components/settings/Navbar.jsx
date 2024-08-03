import Arrow from "../../assets/svg/Arrow.svg";
import profile from "../../assets/svg/settings/profile.svg";
import password from "../../assets/svg/settings/password.svg";
import theme from "../../assets/svg/settings/theme.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const isCurrentPath = (path) => {
    return location.pathname === path;
  };
  const isActivePath = (path) => {
    return location.pathname.startsWith(path);
  };


  return (
    <>
      <div className="w-[400px]  sticky top-0  text-white font-montserrat h-screen  bg-gradient-to-b from-[#414449] to-black pl-20 pr-5 py-6">
        <div className="flex  h-6 gap-x-2 items-center ">
          <button className="w-6 h-6 hover:bg-gray-200 hover:bg-opacity-10 rounded-md flex justify-center items-center">
            {" "}
            <img src={Arrow} className="rotate-180 w-4 h-4" alt="" />
          </button>
          <h4 className="font-semibold  text-lg">Settings</h4>
        </div>
        {/* <p className="w-6 h-6 bg-red-500 hover:bg-slate-200">red</p> */}
        <div className="mt-10">
          <ul className="">
            <li className="">
              <h4 className=" text-gray-400 font-medium text-sm uppercase">
                Account
              </h4>
              <ul className="space-y-1 flex flex-col mt-4 text- font-semibold">
                <NavLink to="/settings/profile/contact">
                  <li
                    className={`${isActivePath("/settings/profile") ? "rounded-xl px-3 flex py-3 cursor-pointer gap-x-1 bg-slate-300  bg-opacity-15" : "hover:bg-opacity-15 hover:bg-slate-300  rounded-xl px-3 flex py-3 cursor-pointer gap-x-1"}`}
                  >
                    <img src={profile} className="w-5 h-5" alt="" />
                    <p> Profile</p>
                  </li>
                </NavLink>
                <NavLink to="/settings/password">
                  <li   className={`${isCurrentPath("/settings/password") ? "rounded-xl px-3 flex py-3 cursor-pointer gap-x-1 bg-slate-300  bg-opacity-15" : "hover:bg-opacity-15 hover:bg-slate-300  rounded-xl px-3 flex py-3 cursor-pointer gap-x-1"}`}>
                    <img src={password} className="w-6 h-6" alt="" />
                    <p>Password</p>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li className="mt-10">
              <h4 className="text-gray-400 font-medium text-sm uppercase">
                Appearance
              </h4>
              <ul className="mt-4 font-semibold">
                <NavLink to="/settings/theme">
                  <li   className={`${isCurrentPath("/settings/theme") ? "rounded-xl px-3 flex py-3 cursor-pointer gap-x-1 bg-slate-300  bg-opacity-15" : "hover:bg-opacity-15 hover:bg-slate-300  rounded-xl px-3 flex py-3 cursor-pointer gap-x-1"}`}>
                    <img src={theme} className="w-6 h-6" alt="" />
                    <p>Theme</p>
                  </li>
                </NavLink>
                <li></li>
              </ul>
            </li>
            <li className="mt-10">
              <h4 className="text-gray-400 font-medium text-sm uppercase">
                Privacy & Settings
              </h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li className="mt-10">
              <h4 className="text-gray-400 font-medium text-sm uppercase">
                Travel Preferences
              </h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

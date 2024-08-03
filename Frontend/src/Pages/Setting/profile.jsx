// import { useState } from "react";
import Navbar from "../../components/settings/Profile/Navbar.jsx"
// import Contact from "../../components/settings/Profile/Contact.jsx"
import { Outlet } from "react-router-dom";

function Profile() {
 

  return (
    <>
      <div className="bg-blac w-full h-full bg-[#1c1c1c] pb-8">
        <div
          className="flex justify-center items-center w-full h-48 bg-cover bg-no-repeat "
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/564x/f2/32/41/f2324123ed322610368ebc8c8c871b6e.jpg")',
          }}
        >
          <div className="mt-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png"
              className="w-36 h-36 rounded-full hover:opacity-70"
              alt="profile"
            />{" "}
          </div>
        </div>

        <div className="mt-20 ">
        <Navbar/>
        </div>

         <div className="mt-10  flex justify-center items-center font-montserrat text-white  ">
       <Outlet/>
        </div> 
       
      </div>
    </>
  );
}

export default Profile;

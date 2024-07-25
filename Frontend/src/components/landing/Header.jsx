
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
    <header className="w-full h-16 px-10 ">
       <ul className="flex justify-around font-Robotomono pt-4 text-gray-300 ">
            <li>
              {" "}
              <img
                src="../../../nomadxlg.png"
                alt="NomadX2"
                className="absolute -top-6 left-44  w-32"
              />
            </li>
            <ul className="flex gap-x-8  mt-2 text-sm font-medium">
              <li className="hover:underline hover:decoration-white hover:underline-offset-4">
                <a href=""> Services</a>
              </li>
              <li className="hover:underline hover:decoration-white hover:underline-offset-4">
                <a href="">Destination</a>
              </li>
              <li className="hover:underline hover:decoration-white hover:underline-offset-4">
                <a href=""> Pricing</a>
              </li>
            </ul>
            
          <Link to="/Signup"> <li>
              <button className="bg-gradient-to-r  from-black to-[#322E83] font-medium px-5 py-2 rounded-3xl text-white text-sm hover:transition-transform hover:scale-105">
                Go Nomad
              </button>
            </li></Link> 
          </ul>
   </header>
    </>
  )
}

export default Header
import oworld from "./assets/oworld.png";
import girlbp from "./assets/girlbp.png";
// import Map from "../src/components/Map.jsx";
// import React ,{useState} from "react";

function App() {
  // const [showNewPage, setShowNewPage] = React.useState(false);
  return (
    <section className="overflow-x-hidden bg-gradient-to-r from-black to-blue">
      {/* landing section */}
      <section className="w-screen h-screen  ">
        <header className="w-full h-16 px-10">
          <ul className="flex justify-around font-montserrat pt-4 text-gray-400">
            <li>
              {" "}
              <img
                src="../nomadxlg.png"
                alt="NomadX2"
                className="absolute -top-6 left-44  w-32"
              />
            </li>
            <ul className="flex gap-x-8 text-sm font-medium">
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
            <li>
              <button className="bg-gradient-to-r from-black to-[#322E83] font-medium px-5 py-2 rounded-3xl text-white text-sm ring-2 ring-offset-1 ">
                Go Nomad
              </button>
            </li>
          </ul>
        </header>

        <div className="flex justify-center items-center">
          <h1 className=" text-white flex font-Gagalin text-[20rem]">
            <span>N</span>
            <span>
              <img
                src={oworld}
                alt="globe"
                className="h-[15rem] w-[20rem] relative mt-36 animate-bounce "
                onClick={() => setShowNewPage(true)} 
              />
            </span>
            <span>mad X</span>
          </h1>
        </div>
      </section>{" "}
      {/* this is for services */}
      <section className="  h-screen w-screen "></section>
      {/* destination section */}
      <section className="w-screen h-screen  overflow-y-hidden">
        <ul className="flex ">
          <li>
            <img
              src="https://www.livelaw.in/h-upload/2021/02/18/750x450_389326-gulmarg-jk-hc.jpg"
              alt=""
              className="w-screen h-screen "
            />
            <img
              src={girlbp}
              alt=""
              className="bg-cover bg-no-repeat relative -top-[37.3rem] left-[40%]"
            />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      {/* footer */}
      <footer className=" w-screen h-[300px] bg-cover px-24 mt-8 text-white font-montserrat">
        <hr className="border-gray-500" />
        <div className="flex justify-between mt-14">
          <div>
            <img
              src="../nomadxlogo.png"
              alt=""
              className="h-24 w-24 -mt-10 pb-4"
            />
          </div>
          <div className="flex gap-x-14 font-medium  text-lg">
            <h3>Product</h3>
            <h3>Company</h3>
          </div>
        </div>
        <div className="flex justify-end gap-x-14 text-sm ">
          {" "}
          <ul className="">
            <li>Changelog</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Community</li>
          </ul>
        </div>
        <hr className="mt-8 border-gray-500" />
        <div className="mt-4 flex justify-between">
          <p>© 2024 NomadX. All rights reserved.</p>
          <ul className="flex gap-x-4 text-sm font-medium">
            <li>Terms of Service</li>
            <ul>Privacy Policy</ul>
            <ul>Cookies</ul>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default App;

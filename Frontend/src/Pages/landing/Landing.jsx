import oworld from "../../assets/oworld.png";
import girlbp from "../../assets/girlbp.png";
import Header from "../../components/landing/Header.jsx";
import Footer from "../../components/landing/Footer.jsx";
// import Map from "../../components/Map.jsx";
// import React ,{useState} from "react";

function Landing() {
  return (
    <div>
      <section className="overflow-x-hidden font-Robotomono bg-gradient-to-r from-[#000] to-[#141b41]">
        {/* landing section */}
        <section className="w-screen h-screen  ">
          <Header />

          <div className=" ">
            <h4 className="uppercase text-2xl text-[#fff]  absolute left-52 top-44  font-mono text-opacity-30">Explore your</h4>
            <h1 className=" text-white justify-center flex font-Gagalin text-[20rem]">
              <span>W</span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
                  alt="globe"
                  className="h-[24rem] w-[24rem] relative mt-24 transition-transform scale-125 z-10  "
                  // onClick={() => setShowNewPage(true)}
                />
              </span>{""}
              <span className="ml-8">RLD</span>
            </h1>
          </div>

          <div className="hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif" alt="" />
          </div>
        </section>{" "}
        {/* this is for services */}
        {/* <section className="  h-screen w-screen "></section> */}
        {/* destination section */}
        {/* <section className="w-screen h-screen  overflow-y-hidden">
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
        </section> */}
        {/* footer */}

        
        <Footer />
      </section>
    </div>
  );
}

export default Landing;

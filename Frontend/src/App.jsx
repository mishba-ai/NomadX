import oworld from "./assets/oworld.png";
import girlbp from "./assets/girlbp.png";
import Header from "./components/landing/Header.jsx";
import Footer from "./components/landing/Footer.jsx";
// import Map from "../src/components/Map.jsx";
// import React ,{useState} from "react";

function App() {
  // const [showNewPage, setShowNewPage] = React.useState(false);
  return (
    <section className="overflow-x-hidden bg-gradient-to-r from-black to-blue">
      {/* landing section */}
      <section className="w-screen h-screen  ">
        
         <Header />
   

        <div className="flex justify-center items-center">
          <h1 className=" text-white flex font-Gagalin text-[20rem]">
            <span>N</span>
            <span>
              <img
                src={oworld}
                alt="globe"
                className="h-[15rem] w-[20rem] relative mt-36 animate-bounce "
                // onClick={() => setShowNewPage(true)} 
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
     <Footer/>
    </section>
  );
}

export default App;

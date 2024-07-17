import Budget from "../../components/Home/Budget.jsx";
import Calendar from "../../components/Home/Calendar.jsx";
import Todo from "../../components/Home/Todo.jsx";
import Wishlist from "../../components/Home/Wishlist.jsx";
// import Earth from "../components/Home/Earth.jsx";
import mappin from "../../assets/svg/mappin.svg";
import TravelTally from "../../components/Home/TravelTally.jsx";
import Progressbar from "../../components/Progressbar.jsx";
import Navbar from "../../components/Navbar.jsx";

function Home() {
  return (
    // <div className=" flex w-full  h-screen justify-between ">
    //   <div className="w-[40rem] bg-white h-[647px] rounded-2xl">
    //     <div className="p-6 w-full">
    //       <h1 className="font-semibold font-montserrat text-3xl">
    //         Welcome,Anna!!
    //       </h1>
    //       <div className="flex gap-x-2">
    //         <img src={mappin} className="h-5 w-5" alt="mappin" />
    //         <p className="text-sm font-medium">Today you are in {""}</p>
    //       </div>
    //       <TravelTally />
    //       <div className="mt-6">
    //         <Progressbar progressPercentage={23} percentageOrDollar={"$"} />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="">
    //     <Calendar />
    //     <div className="flex mt-4 gap-x-4">
    //       <Budget />
    //       <div className="">
    //         <Todo />
    //         <Wishlist />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex">
      <div className="w-[30rem] h-full bg-white rounded-l"></div>
      <div>
      {/* bg-[#F2C464] bg-[#F7F7F7] bg-[#87CE]*/}
      </div>
    </div>
  );
}

export default Home;

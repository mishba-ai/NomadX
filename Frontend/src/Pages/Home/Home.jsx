import Budget from "../../components/Home/Budget.jsx";
import Calendar from "../../components/Home/Calendar.jsx";
import Todo from "../../components/Home/Todo.jsx";
import Wishlist from "../../components/Home/Wishlist.jsx";
// import Earth from "../components/Home/Earth.jsx";
import mappin from "../../assets/svg/mappin.svg";
import TravelTally from "../../components/Home/TravelTally.jsx";
import Progressbar from "../../components/Progressbar.jsx";

function Home() {
  return (
    <>
      <div className=" flex w-full  h-screen font-Robotomono bg-black justify-between pr-12">
        <div className="w-[45rem] bg-transparent text-sky-200 border-r border-gray-700 h-screen rounded-2xl flex justify-center ">
          <div className="px-36 py-10 w-full">
            <h1 className="font-semibold text-4xl text-sky-200">
              Welcome,Anna!!
            </h1>
            <div className="flex gap-x-2 mt-2">
              <img src={mappin} className="h-5 w-5" alt="mappin" />
              <p className="text-sm font-Robotomono text-sky-200">
                Today you are in {""}
              </p>
            </div>
            <TravelTally />
            <div className="mt-6">
              <Progressbar progressPercentage={23} percentageOrDollar={"$"} />
            </div>
            <dir>
              <img
                src="https://i.pinimg.com/originals/bc/62/e3/bc62e33b3a1d11c7b007b4120e8d209e.gif"
                className="w-80 h-80 transition-transform scale-x-150"
                alt=""
              />
            </dir>
          </div>
        </div>

        <div className="pt-5">
          <Calendar />
          <div className="flex mt-4 gap-x-4">
            <Budget />
            <div className="">
              <Todo />
              <Wishlist />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-[30rem] h-full bg-white rounded-l"></div>
        <div>{/* bg-[#F2C464] bg-[#F7F7F7] bg-[#87CE]*/}</div>
      </div>
    </>
  );
}

export default Home;

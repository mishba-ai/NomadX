import {
  Budget,
  Todo,
  Wishlist,
  Travelstats,
} from "../../components/Dashboard";
import Location from "../../components/Location.jsx";
import Progressbar from "../../components/Progressbar.jsx";
import { useState, useEffect } from "react";
import WorldCities from "../../components/Globe/worldcities.jsx";
import TravelCalendar from "../Calendar/TravelCalendar.jsx";
import api from "../../api.js";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await api.get("user/profile/", {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        });
        if (response.data && response.data.username) {
          setUser(response.data.username);
        } else {
          console.error("Username not found in response:", response.data);
        }
      } catch (error) {
        console.error("error fetching username", error);
      }
    };
    fetchUsername();
  }, []);

  return (
    <>
      <div className=" flex w-full  h-screen font-Robotomono bg-[#000] justify-between pr-12">
        <div className="w-[45rem] bg-transparent text-sky-200 border-r border-gray-700 h-screen rounded-2xl flex justify-center ">
          <div className="px-36 py-10 w-full">
            <div className="flex">
              <h1 className="font-semibold text-4xl text-sky-200"> Welcome,</h1>
              {user ? (
                <h1 className="font-semibold text-4xl text-sky-200">{user}!</h1>
              ) : (
                <p className="font-semibold text-2xl text-sky-200">
                  Loading...
                </p>
              )}
            </div>
            <Location />
            <Travelstats />
            <div className="mt-6">
              <Progressbar progressPercentage={23} percentageOrDollar={"$"} />
            </div>
            <div className="w-64 h-64 mt-4">
              <WorldCities />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-[46rem] border-none  h-80">
            {" "}
            <TravelCalendar />
          </div>

          <div className="flex mt-4 justify-between">
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

import { useState, useEffect, useRef } from "react";
import search from "../../../assets/svg/search.svg";
import ShowDestination from "./Core Filters/ShowDestination.jsx";
import Showdatepicker from "./Core Filters/Showdatepicker.jsx";
import Addmorefilters from "./Core Filters/Addmorefilters.jsx";

function Filter() {

  const [showAddDestination, setShowAddDestination] = useState(false);
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const selectDestination = () => {
    setShowAddDestination((prevState) => !prevState);
  };
  const selectShowDateRangePicker = () => {
    setShowDateRangePicker((prevState) => !prevState);
  };
  const selectMoreFilters = () => {
    setShowMoreFilters((prevState) => !prevState);
  };

  const pickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        !event.target.closest(".showDestination") &&
        !event.target.closest(".showDateRangePicker") &&
        !event.target.closest(".addmorefilters")
      ) { 
        setShowAddDestination(false);
        setShowDateRangePicker(false);
        setShowMoreFilters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //to render the city places

  

  return (
    <>
      <div className="flex   sticky top-10 justify-center font-robotomono z-40">
        <div className=" z-40  w-[826px] rounded-full h-16 flex bg-[#000] border border-[#374754] text-[#d1d5db] ">
          <div className="">
            <ul className="flex gap-x-2 text-gray-500">
              <li className="w-64 ">
                <div className="">
                  <button
                    className="rounded-full w-64 active:bg-[#c6dee1] hover:text-black hover:bg-[#c6dee1] h-16"
                    onClick={() => selectDestination()}
                  >
                    <div className="flex flex-col px-6 py-1 place-items-start">
                      <p className="  text-start text-gray-500">Where</p>
                      <input
                        type=" flex "
                        className="bg-transparent "
                        placeholder="Search Destination"
                      />
                    </div>
                  </button>
                </div>
              </li>
              <li className="w-[18.6rem] flex gap-x-1">
                <hr className="border-gray-900  border h-8 my-4" />
                <div className="">
                  <button
                    className="rounded-full w-36 px-2 h-16 active:bg-[#c6dee1] hover:text-black hover:bg-[#c6dee1] "
                    onClick={() => selectShowDateRangePicker()}
                  >
                    <div className="flex flex-col active:text-black text-s text-start px-2">
                      <p className="text-gray-0 ">Start Adventure </p>
                      <p>Add Dates</p>
                    </div>
                  </button>
                </div>{" "}
                <hr className="border-gray-900  border h-8 my-4" />
                <div className="">
                  <button
                    className="rounded-full  w-36 px-3  h-16 active:bg-[#c6dee1] hover:text-black hover:bg-[#c6dee1]"
                    onClick={() => selectShowDateRangePicker()}
                  >
                    <div className="flex flex-col text-start">
                      <p className="text-gray-500">End Addventure</p>
                      <p>Add Dates</p>
                    </div>
                  </button>
                </div>
                <hr className="border-gray-900  border h-8 my-4" />
              </li>
              <li className="w-64 ">
                <div>
                  <button
                    onClick={() => selectMoreFilters()}
                    className="rounded-full w-64 flex justify-between py-2 px-3 active:bg-[#c6dee1] hover:text-black hover:bg-[rgb(198,222,225)] h-16 "
                  >
                    <div className="">
                      <p className="text-start">Add more filter</p>
                    </div>
                    <div className="flex justify-end ">
                      <button className="w-12 h-12  bg-[#b4dff4] rounded-full flex justify-center items-center hover:bg-[#a7e3fe]">
                        <img src={search} alt="search" />
                      </button>
                    </div>
                  </button>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      {showAddDestination && (
        <div className="ml-96 flex mt-14 z-50 " ref={pickerRef}>
          {" "}
          <ShowDestination />{" "}
        </div>
      )}
      {showDateRangePicker && (
        <div className="ml-[22.2rem] flex mt-14 z-50" ref={pickerRef}>
          {" "}
          <Showdatepicker />{" "}
        </div>
      )}
      {showMoreFilters && (
        <div className="ml-[22.2rem] flex mt-14 z-50"ref={pickerRef}>
          {" "}
          <Addmorefilters />{" "}
        </div>
      )}


    </>
  );
}

export default Filter;

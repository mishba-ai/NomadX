import { useState } from "react";

function Filter() {
  // const [Selected, setSelected] = useState("");
  return (
    <div className="flex  sticky top-10 justify-center font-robotomono">
      <div className=" z-50  w-[803px] rounded-full h-16 flex bg-[#000000] text-[#d1d5db] ">
        <div className="">
          <ul className="flex gap-x-2 text-gray-500">
            <li className="w-64">
              <div className="">
                <button className="rounded-full w-64 active:bg-gray-200 hover:bg-white hover:bg-opacity-15 h-16">
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
            <li className="w-[17.2rem] flex gap-x-1">
              <hr className="border-gray-900  border h-8 my-4" />
              <div className="">
                <button className="rounded-full w-32 h-16 hover:bg-slate-50 hover:bg-opacity-15">
                  <div className="flex flex-col text-s text-start px-2">
                    <p className="text-gray-500 ">Start Adventure </p>
                    <p>Add Dates</p>
                  </div>
                </button>
              </div>{" "}
              <hr className="border-gray-900  border h-8 my-4" />
              <div className="">
                <button className="rounded-full  w-32 h-16 hover:bg-slate-50 hover:bg-opacity-15"><div className="flex flex-col">
                    <p className="text-gray-500">End Addventure</p>
                    <p>Add Dates</p>
                  </div></button>
              </div>
              <hr className="border-gray-900  border h-8 my-4" />
            </li>
            <li className="w-64 ">
              <div className="rounded-full w-64 flex justify-end items-center  hover:bg-slate-50 hover:bg-opacity-15 h-16 ">
                {/* <button className="w-12 h-12 bg-white rounded-full"></button> */}
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;

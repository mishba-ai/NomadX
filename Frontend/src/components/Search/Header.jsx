function Header() {
  return (
    <div className="flex justify-end sticky top-0">
      <div
        className=" z-50  w-[400px] h-screen flex flex-col items-center px-6 py-3 bg-black text-[#d1d5db] "
        style={{ backgroundImage: `url('')` }}
      >
        <h1 className="text-2xl font-medium font-Robotomono text-center pt-4">
          Find Your Next Adventure
        </h1>
        <div className="w-full mt-4">
          {/* making filter for digital nomads where they can choose their next destination based on their preferences */}

          <div className=" w-full pl-4 font-Robotomono flex flex-col gap-y-6 ">
            <div className="">
              <h1 className="text-xl ">Location</h1>
              <div className="pl-4 flex flex-wrap">
                <select
                  name="cont"
                  className="w-44 mt-3  rounded-xl border-white bg-black border-[1px] p-2 "
                  id=""
                >
                  <option value=" " disabled selected hidden>
                    Continent
                  </option>
                  <option className="p-1 bg-black text-white" value="0">
                    Asia
                  </option>
                  <option className="p-1 bg-black text-white" value="1">
                    Africa
                  </option>
                  <option className="p-1 bg-black text-white" value="2">
                    North America
                  </option>
                  <option className="p-1 bg-black text-white" value="3">
                    South America
                  </option>
                  <option className="p-1 bg-black text-white" value="4">
                    Antartica
                  </option>
                  <option className="p-1 bg-black text-white" value="5">
                    Europe
                  </option>
                  <option className="p-1 bg-black text-white" value="6">
                    Australia
                  </option>
                </select>
              </div>
            </div>
            <div>
              <h1 className=" text-xl ">Internet</h1>
            </div>
            <div>
              {" "}
              <h1 className=" text-xl ">Budget</h1>
            </div>
            <div>
              {" "}
              <h1 className=" text-xl ">Duration</h1>
              <div>
            
              </div>
            </div>
            <div>
              {" "}
              <h1 className=" text-xl ">Climate</h1>
              <div className="mt-4 pl-6">
                    <ul className="flex flex-wrap gap-x-4">
                      <li className=""><button className="focus:bg-white focus:border  border focus:text-black focus:rounded-lg border-white text-center rounded-lg p-1 ">sunny</button></li>
                      <li className="border-white text-center rounded-lg p-1 focus:bg-white focus:border  border"><button>rainy</button></li>
                      <li className="border-white text-center rounded-lg p-1 focus:bg-white focus:border  border"><button>snowy</button></li>
                      <li></li>
                    </ul>
              </div>
            </div>
          </div>

          <div></div>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
}

export default Header;

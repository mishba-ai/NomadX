import internet from "../../../../assets/svg/filter/internet.svg";
import climate from "../../../../assets/svg/filter/climate.svg";
import safety from "../../../../assets/svg/filter/safety.svg";
import budget from "../../../../assets/svg/filter/budget.svg";
import visa from "../../../../assets/svg/filter/visa.svg";
import air from "../../../../assets/svg/filter/air.svg";


function Addmorefilters() {
  return (
    <div className="w-[826px] border text-white border-slate-800 bg-[#000] rounded-3xl  flex  p-6 h-96 font-montserrat  ">
      <div>
        <ul className="flex flex-col gap-y-1 text-white  font-semibold h-full overflow-x-hidden overflow-y-auto">

          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={internet} className="w-5 h-5 " alt="" />
              </span>

              <p className="text-center mt-1"> Internet Quality</p>
            </button>
          </li>
          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={climate} className="w-6 h-6 " alt="" />
              </span>

              <p className="text-center mt-1">Climate</p>
            </button>
          </li>
          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={safety} className="w-6 h-6 " alt="" />
              </span>

              <p className="text-center mt-1"> Safety</p>
            </button>
          </li>
          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={budget} className="w-5 h-5 " alt="" />
              </span>

              <p className="text-center mt-1">Budget</p>
            </button>
          </li>
          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={visa} className="w-6 h-6 " alt="" />
              </span>

              <p className="text-center mt-1"> Visa Ease</p>
            </button>
          </li>
          <li className="">
            <button 
              className="hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
       "
            >
              <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                {" "}
                <img src={air} className="w-5 h-5 " alt="" />
              </span>

              <p className="text-center mt-1"> Air Quality</p>
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Addmorefilters;

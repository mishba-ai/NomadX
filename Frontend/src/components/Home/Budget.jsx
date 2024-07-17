import Progressbar from "../Progressbar.jsx";

function Budget() {
  return (
    <div>
      <div className="w-[18rem] rounded-2xl h-[310px] p-4 bg-white">
        <h1 className="text-xl font-montserrat font-semibold">Budget</h1>
        <p className="text-xs font-mono font-medium mt-1">
          Good job,so far you have been keeping it under the budget
        </p>
        <div className="mt-6">
          <Progressbar progressPercentage={47} percentageOrDollar={"$"} />
        </div>
        <div className="mt-2 font-montserrat">
          <ul className="flex flex-col gap-y-2">
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                  8.7
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                  bangalore train ticket
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">100$</span>
              </div>
            </li>
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                  18.7
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                  hotel train ticket
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">2000$</span>
              </div>
            </li>
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                  18.10
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                  payday
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">3000$</span>
              </div>
            </li>
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                  18.11
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                 hotel in osaka
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">4500$</span>
              </div>
            </li>
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                 1.12
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                  India train ticket
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">900$</span>
              </div>
            </li>
            <li className="flex  justify-between">
              <div className="flex gap-x-1">
                <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                  11.12
                </span>{" "}
                <span className="text-sm flex justify-center items-center h-5 font-medium">
                  apartment rent
                </span>
              </div>{" "}
              <div className="">
                {" "}
                <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-lime-300">5000$</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Budget;

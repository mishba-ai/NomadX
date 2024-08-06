import Progressbar from "../Progressbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

//axios is used to make the request to the server to get the data from the server and display it on the client side

function Budget() {
  const [budget, setBudget] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [budgets, setBudgets] = useState([]);

  function createNewBudget() {
    setShowForm(true);
  }
  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    // e.g., send data to server, update budgets state
    setBudgets([...budgets, data]);
    setShowForm(false);
  };
  const renderForm = () => {
    return (
      <div className="w-28 h-28 bg-white">
        <form onSubmit={handleFormSubmit}>
          {/* Your form inputs */}
          <input type="number" placeholder="Enter your budget" />
          <input type="text" placeholder="budget is for" />
          <input type="date" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  useEffect(() => {
    // createNewBudget();
  }, []);
  return (
    <div>
      <div className="w-[18rem] rounded-2xl h-[310px] p-4 bg-[#c4d6fc]">
        <h1 className="text-xl font-montserrat font-semibold">Budget</h1>
        <p className="text-xs font-mono font-medium mt-1">
          Good job,so far you have been keeping it under the budget
        </p>
        <div className="mt-6">
          <Progressbar progressPercentage={47} percentageOrDollar={"$"} />
        </div>
        <div className="mt-2 font-montserrat pb-2">
          <div className="flex justify-between">
            <h3 className="font-medium text-sm">upcoming payments</h3>
            <button onClick={createNewBudget}>+</button>
          </div>
          {showForm && renderForm()}
          {/* <ul>
            {budgets.map((budget,index) => () => {  // map over budgets array to render each budget item
            <li key={index}>  {budget.amount} - {budget.description} - {budget.date}</li>
            })}
          </ul> */}
          {/* <ul className="flex flex-col gap-y-2 ">
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Budget;

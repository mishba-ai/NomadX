import Progressbar from "../Progressbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import deleteic from "../../assets/svg/deleteic.svg";
import edit from "../../assets/svg/edit.svg";
//axios is used to make the request to the server to get the data from the server and display it on the client side

function Budget() {
  const [showForm, setShowForm] = useState(false);
  const [budgets, setBudgets] = useState([
    {
      amount: "1k",
      description: "Initial Budget",
      date: "2024-08-01", // Use today's date or any default date
    },
  ]);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    date: " ",
  });
  const [editingIndex, setEditingIndex] = useState(null); // this is used to set the index of the budget that is to be edited

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`; // this is used to format the date in the format of dd.mm .padStart() is used to add the 0 in the date if the date is less than 10
  };
  function createNewBudget() {
    setShowForm(true);
  }
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      // this is used to set the value of the input field in the state
      ...formData, // this is used to get the previous value of the state
      [name]: value, // this pair the value of the input field with the name of the input field
    });
  };

  //close form
  const closeForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      handleUpdate(e);
    } else {
      // Handle form submission logic here
      // e.g., send data to server, update budgets state
      setBudgets([...budgets, formData]);
      setFormData({ amount: "", description: "", date: "" });
      setShowForm(false);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index); // this is called when the edit button is clicked and the index of the budget is passed to it
    setFormData(budgets[index]);
    setShowForm(true);
  };

  const handleUpdate = (e) => {
    //this function is called when the form is submitted to update the budget
    e.preventDefault(); //this is used to prevent the default behaviour of the form
    const updateBudgets = [...budgets]; //this is used to get the previous value of the budgets
    updateBudgets[editingIndex] = formData; //this is used to update the budget with the new value
    setEditingIndex(null); //this is used to set the editing index to null because the editing is done
    setFormData({ amount: "", description: "", date: "" }); //this is used to set the form data to empty after the editing is done
    setShowForm(false);
  };
 
  const handleDelete = (index) => {
   const newBudgets = budgets.filter((_,i) => i !== index) //_ is used to get the value of the budget and i is used to get the index of the budget
    setBudgets(newBudgets) //this is used to set the budgets to the new value
  }
  const renderForm = () => {
    return (
      <div className="h-48 w-64 absolute bottom-20  bg-[#000] rounded-md bg-opacity-50 font-Robotomono z-10">
        <div className="flex justify-end p-3">
          <button
            onClick={closeForm}
            className="w-4 h-4 rounded-full bg-sky-50 text-xs text-center hover:bg-sky-100"
          >
            x
          </button>
        </div>
        <div className="px-4 justify-center flex flex-col place-items-center">
          <p className="text-sky-100">{editingIndex !== null ?'Edit Budget':'Enter Budget'}</p>
          <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-2">
            {/* Your form inputs */}
            <input
              type="number"
              name="amount"
              className="w-20 h-8 p-1 rounded-lg bg-transparent border border-sky-200"
              value={formData.amount}
              onChange={handleinputChange}
              placeholder="amount"
            />
            <input
              type="text"
              required
              name="description"
              value={formData.description}
              onChange={handleinputChange}
              className=" h-8 p-1 rounded-lg bg-transparent border  border-sky-200 w-44"
              placeholder="Enter description"
            />
            <input
              type="date"
              required
              className=" h-8 p-1 rounded-lg  bg-transparent border border-sky-200 w-36"
              name="date"
              value={formData.date}
              onChange={handleinputChange}
            />
            <button
              type="submit"
              className="bg-sky-200 rounded-sm p-1 px-2 hover:bg-[#b2e5fd] text-sm"
            >
              {editingIndex !== null ? 'Update' : 'Submit'}
            </button>
          </form>
        </div>
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
          <ul className="text-center h-36 flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden  scroll-smooth scroll-px-1 scroll-thumb-purple-300 scrollbar-track-purple-100">
            {budgets.map((budget, index) => (
              // map over budgets array to render each budget item
              <li
                key={index}
                className="flex justify-between items-center hover:bg-white rounded-md p-1 hover:bg-opacity-[0.01] cursor-pointer relative group"
              >
                {" "}
                <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-50 gap-x-4 transition-opacity duration-200 bg-black bg-opacity-50 rounded-md z-10 ">
                  <button className="" onClick={()=> handleDelete(index)}  >
                    <img src={deleteic} alt="" />
                  </button>
                  <button onClick={() => handleEdit(index)}>
                    <img src={edit} alt="" />
                  </button>
                </div>
                <div className="flex gap-x-1 group-hover:blur-[3px]">
                  <span className="w-12 h-5 flex items-center justify-center rounded-3xl border-gray-400 border text-xs ">
                    {formatDate(budget.date)}
                  </span>{" "}
                  <span className="text-sm w-40 line-clamp-2 bg-red-40  font-medium break-words">
                    {budget.description}
                  </span>
                </div>{" "}
                <div className="">
                  {" "}
                  <span className=" h-5 flex items-center justify-center rounded-3xl  text-xs p-2 bg-purple-400 text-white">
                    {budget.amount}$
                  </span>
                </div>
              </li>
            ))}
          </ul>
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
          </ul>  */}
        </div>
      </div>
    </div>
  );
}

export default Budget;

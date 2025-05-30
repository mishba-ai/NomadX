import { useState, useEffect } from "react";
import square from "../../assets/todo/square.svg";
import tickbox from "../../assets/todo/tickbox.svg";
import deleteic from "../../assets/svg/deleteic.svg";
import edit from "../../assets/svg/edit.svg";

function Todo() {
  const [todos, setTodos] = useState([
    { description: "check the details for the trp", checked: true },
    { description: "pack the bags", checked: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  //function to add a new empty todo items to the list of todos
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { description: inputValue, checked: false }]);
      setInputValue(""); // Clear the input after adding
    }
  };

  const handleToggleCheck = (index) => {
    const newTodos = [...todos]; //
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleUpdateDescription = (index, newDescription) => {
    const newTodos = [...todos];
    newTodos[index].description = newDescription; //update the description of the todo item
    setTodos(newTodos);
  };
  useEffect(() => {
    const lastIndex = todos.length - 1;
    const secondLastIndex = lastIndex - 1;

    if (
      lastIndex > 0 &&
      todos[lastIndex].description === "" &&
      todos[secondLastIndex].description === ""
    ) {
      // Remove the last todo if it's empty and there's another empty one above it
      setTodos(todos.slice(0, -1)); //slice
    } else if (todos[lastIndex].description !== "") {
      // Add a new empty todo if the last one is not empty
      setTodos([...todos, { description: "", checked: false }]);
    }
  }, [todos]);
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // _ is a placeholder for the value of the array and i is the index of the array
    setTodos(newTodos);
  };
  return (
    <div>
      <div className="w-[24.5rem] p-4 rounded-xl h-[10rem] border-[3px]  border-[#9dc8f9] text-white">
        <h1 className="text-xl font-mono font-semibold">Todo</h1>

        <div className="my-2 mx-2">
          {todos.length > 0 && (
            <ul className="flex flex-col  h-20 overflow-y-auto">
              {todos.map((todo, index) => (
                <li className="flex justify-between" key={index}>
                  <div className="flex gap-x-2">
                    <img
                      src={todo.checked ? tickbox : square}
                      alt=""
                      onClick={() => handleToggleCheck(index)}
                    />{" "}
                    <input
                      type="text"
                      className="rounded caret-sky-200 bg-transparent text-white w-56"
                      placeholder="Type something ..."
                      value={todo.description}
                      onChange={(e) =>
                        handleUpdateDescription(index, e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddTodo();
                        }
                      }}
                    />
                  </div>
                  <div className="flex gap-x-2">
                    <button onClick={() => handleDeleteTodo(index)}>
                      <img src={deleteic} alt="" className="h-4 w-4" />
                    </button>
                    <button>
                      <img src={edit} alt="" className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;

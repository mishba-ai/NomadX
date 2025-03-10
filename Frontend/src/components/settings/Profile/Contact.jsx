
import {useState} from 'react'

function Contact() {
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
         <form action="" className="font-Robotomono w-[840px]">
            <div className="flex flex-col ">
             <label
                htmlFor="NameText"
                className="relative top-3 z-50 text-gray-500 left-6 w-40 text-center bg-[#1c1c1c] text-sm uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2 border-gray-500 font-light bg-transparent px-4 py-5 text-xl font-Robotomono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>

            <div className="flex flex-col ">
              <label
                htmlFor="Tagline"
                className="relative top-3 z-50 left-6 w-16  text-center bg-[#1c1c1c] text-sm uppercase  overflow-hidden text-ellipsis whitespace-nowrap text-gray-500"
              >
                Tagline
              </label>
              <input
                type="text"
                id="Tagline"
                className=" border  bg-transparent border-gray-500 font-light font-Robotomono px-4 py-4 text-xl  rounded-2xl"
                placeholder="Add a Brief Tagline-you ,in a sentence"
              />
            </div>

            <div className="flex flex-col ">
              <label
                htmlFor="Pronouns"
                className="relative top-3 z-50 left-6 w-24 text-center bg-[#1c1c1c] text-sm uppercase  overflow-hidden text-ellipsis whitespace-nowrap text-gray-500"
              >
                pronouns
              </label>
              <select
                type="Dropdown"
                style={{ color: isValid ? "#6b7280" : "#9ca3af" }}
                id="Pronouns"
                className=" border border-gray-500  text-white bg-transparent px-4 py-4 text-xl font-Robotomono font-light rounded-2xl"
              >
                <option
                  className="bg-[#1c1c1c] text-gray-500 font-light font-Robotomono  w-56 hover:bg-black hover:bg-opacity-15"
                  value=""
                  disabled
                  selected
                  hidden
                >
                  select pronouns
                </option>
                <option
                  className="bg-[#1c1c1c] hover:bg-black hover:bg-opacity-15"
                  value="0"
                >
                  she/her
                </option>
                <option
                  className="bg-[#1c1c1c] hover:bg-black hover:bg-opacity-15"
                  value="1"
                >
                  he/him
                </option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col font-Robotomono">
                <label
                  htmlFor="occ"
                  className="relative top-3 z-50 left-6 w-24 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500  overflow-hidden text-ellipsis whitespace-nowrap "
                >
                  Occupation
                </label>
                <input
                  type="text"
                  id="occ"
                  className=" border border-gray-500  bg-transparent px-4 py-4 text-xl font-light font-Robotomono rounded-2xl"
                  placeholder="Your main Occupation"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-2xl font-Robotomono  text-gray-500">at</p>
              </div>
              <div className="flex flex-col font-Robotomono ">
                <label
                  htmlFor="org"
                  className="relative  top-3 z-50 left-6 w-28 text-center text-gray-500 bg-[#1c1c1c] text-sm uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
                >
                  organization
                </label>
                <input
                  type="text"
                  id="NameText"
                  className=" border border-gray-500  bg-transparent px-4 py-4 text-xl font-Robotomono font-light rounded-2xl"
                  placeholder="organization"
                />
              </div>
            </div>

            <div className="flex flex-col ">
              <label
                htmlFor="org"
                className="relative top-3 z-50 left-6 w-20 text-center bg-[#1c1c1c] text-sm uppercase  overflow-hidden text-ellipsis whitespace-nowrap text-gray-500"
              >
                Location
              </label>
              <select
                type="text"
                id="NameText"
                style={{ color: isValid ? "black" : "#9ca3af" }}
                className=" border border-gray-500 font-light  bg-transparent px-4 py-4 text-xl  rounded-2xl"
              >
                <option
                  value=""
                  className="bg-[#1c1c1c]"
                  disabled
                  selected
                  hidden
                >
                  Your Location
                </option>
                <option value="0" className="bg-[#1c1c1c]">
                  city
                </option>
                <option value="1" className="bg-[#1c1c1c]">
                  city
                </option>
                <option value="2" className="bg-[#1c1c1c]">
                  city
                </option>
              </select>
            </div>
          </form>
    </div>
  )
}

export default Contact
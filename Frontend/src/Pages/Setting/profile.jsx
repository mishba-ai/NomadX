function profile() {
  return (
    <>
      <div className="bg-blac w-full h-full bg-[#1c1c1c]">
        <div
          className="flex justify-center items-center w-full h-48 bg-cover bg-no-repeat "
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/564x/f2/32/41/f2324123ed322610368ebc8c8c871b6e.jpg")',
          }}
        >
          <div className="mt-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png"
              className="w-36 h-36 rounded-full hover:opacity-70"
              alt="profile"
            />{" "}
          </div>
        </div>

        <div className="mt-10 p-16 font-montserrat text-white">
          <form action="">
            <div className="flex flex-col ">
              <label
                htmlFor="NameText"
                className="relative top-3 z-50 left-6 w-40 text-center bg-[#1c1c1c] text-xs uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2  bg-transparent px-4 py-4 text-2xl font-mono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>

            <div className="flex flex-col ">
              <label
                htmlFor="NameText"
                className="relative top-3 z-50 left-6 w-40 text-center bg-[#1c1c1c] text-xs uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2  bg-transparent px-4 py-4 text-2xl font-mono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>

            <div className="flex flex-col ">
              <label
                htmlFor="NameText"
                className="relative top-3 z-50 left-6 w-40 text-center bg-[#1c1c1c] text-xs uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2  bg-transparent px-4 py-4 text-2xl font-mono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="NameText"
                className="relative top-3 z-50 left-6 w-40 text-center bg-[#1c1c1c] text-xs uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2  bg-transparent px-4 py-4 text-2xl font-mono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="NameText"
                className="relative top-3 z-50 left-6 w-40 text-center bg-[#1c1c1c] text-xs uppercase  overflow-hidden text-ellipsis whitespace-nowrap "
              >
                Your Display Name
              </label>
              <input
                type="text"
                id="NameText"
                className=" border-2  bg-transparent px-4 py-4 text-2xl font-mono rounded-2xl"
                placeholder="Enter Your Display Name"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default profile;

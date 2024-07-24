import Arrow from "../../assets/svg/Arrow.svg";
import icelandbg from "../../assets/videos/icelandbg.mp4";

function Signup() {
  return (
    <div className=" w-full h-full ">
      <div className=" ">
        
        <video
          src={icelandbg}
          alt=""
          className=" w-[100%] max-h-screen object-cover bg-no-repeat pointer-events-none"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="flex h-screen justify-center items-center  overflow-y-hidden absolute top-0 right-0 left-0">
        <div className="w-[1050px]  h-[550px] rounded-2xl bg-black p-12 opacity-[0.6] text-white font-montserrat flex">
          <div className="w-1/2">
          <img src="../../NOMADX.png" alt="logo" />
          </div>

          <div className="w-1/2">
          <h3 className="font-semibold text-gray-400 text-sm">
            START FOR FREE
          </h3>
          <h1 className="text-4xl font-bold mt-4">Create new account</h1>
          <h4 className="font-medium text-xs mt-4 text-gray-400">
            Already A Member?{" "}
            <span
              
              className="text-white hover:underline cursor-pointer"
            >
              Sign in
            </span>
          </h4>
          <form
            action=""
            className="mt-8 flex text-black flex-wrap gap-3 font-mono gap-y-10"
          >
            <input
              type="text"
              placeholder="First Name"
              className="px-4  rounded-lg w-54 opacity-[0.45] py-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 rounded-lg opacity-[0.45] w-54 py-3"
            />
            <label>
              <input
                type="email"
                placeholder="Email"
                className="px-4 rounded-lg opacity-[0.45] w-[447px] py-3"
              />
              
            </label>
            <input
              type="password"
              placeholder="Password"
              className="px-4 rounded-lg opacity-[0.45] text-black w-54 py-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 rounded-lg opacity-[0.45] text-black w-54 py-3 "
            />
              <button className="w-48  bg-white text-black hover:text-white hover:bg-black hover:border   justify-center gap-x-2 font-montserrat font-bold text-lg py-2 rounded-3xl  opacity-[0.45]"> 
              Change Method{" "}
             
            </button>
            <button className="w-[15.3rem]  bg-white text-black hover:text-white hover:bg-black hover:border   justify-center gap-x-2 font-montserrat font-bold text-2xl py-2 rounded-3xl flex "> 
              Go Nomad{" "}
              <span>
                <img src={Arrow} className="pt-1" alt="arrow" />
              </span>
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

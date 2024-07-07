import suitcase from "../assets/svg/Navbar/suitcase.svg";
import Community from "../assets/svg/Navbar/community.svg";
import logout from "../assets/svg/Navbar/logout.svg";
import search from "../assets/svg/Navbar/search.svg";
import settings from "../assets/svg/Navbar/settings.svg";
import image from "../assets/svg/Navbar/image.svg";
import calendar from "../assets/svg/Navbar/calendar.svg";

function Navbar() {
  return (
    <>
      <nav className=" flex flex-col ">
        <div className="w-12 py-3 px-2 rounded-2xl h-[647px] bg-[#282727] flex flex-col  justify-between items-center">
          <div className="flex flex-col">
            <button className="w-8 h-8 rounded-full bg-[#d1d5db]">
              <img src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png" className="w-8 h-8 rounded-full " alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-y-6">
            {" "}
            <button>
              {" "}
              <img src={suitcase} alt="" />
            </button>
            <button>
              <img src={calendar} alt="" />
            </button>
            <button>
              {" "}
              <img src={Community} alt="" />
            </button>
            <button>
              <img src={settings} alt="" />
            </button>
            <button>
              <img src={search} alt="" />
            </button>{" "}
            <button>
              <img src={image} alt="" />
            </button>
          </div>
          <div className="flex flex-col">
            {" "}
            <button className="w-8 h-8">
              <img src={logout} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

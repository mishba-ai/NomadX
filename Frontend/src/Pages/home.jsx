import Budget from "../components/Home/Budget.jsx";
import Callender from "../components/Home/Callender.jsx";
import Todo from "../components/Home/Todo.jsx";
import Wishlist from "../components/Home/Wishlist.jsx";
import Earth from "../components/Home/Earth.jsx";
import Navbar from "../components/Navbar.jsx";

function Home() {
  return (
    <div className="bg-[#e9ebf8] flex  py-6 px-14 justify-between">
      <div className="w-[40rem] rounded-2xl  h-[647px] bg-white">
        <Navbar />
      </div>
      <div>
        <Callender />
        <div className="flex mt-4 gap-x-4">
          <Budget />
          <div className="">
            <Todo />
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

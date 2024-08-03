import Header from "../../components/Forum/header";

function Forum() {
  return (
    <div className="w-full h-screen  bg-[#fff] font-Robotomono">
      <Header />

      <section className="px-48">
        <nav className="">
          <div className="flex justify-between mt-6 text-lg font-medium">
            <ul className="flex gap-x-8">
              <li className="">
                <select className="rounded-xl py-1 border border-transparent focus:border-2 focus:border-[#98cdf9]">
                  <option value="" selected hidden disabled className=" ">
                    Categories
                  </option>
                  <option value="0">Travel Planning and Tips</option>
                  <option value="1">Accommodation and Living</option>
                  <option value="2">Safety and Health</option>
                  <option value="3">Culture and Language</option>
                  <option value="4">Technology and Work</option>
                  <option value="5">Community and Social</option>
                  <option value="6">Transportation</option>
                  <option value="7">Photography and Videography</option>
                </select>
              </li>
              <li>
                <span className="cursor-pointer ">Latest</span>
              </li>
              <li>Top</li>
            </ul>
            <ul>
              <li>
                <button className="bg-[#98cdf9] p-2 px-3 rounded-lg text-sky-800 hover:bg-sky-300">
                  New Topic
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section className="px-44  justify-center flex  ">
        <div className="text-4xl font-semibold w-96 text-sky-6">
          comming soon
        </div>
      </section>
    </div>
  );
}

export default Forum;

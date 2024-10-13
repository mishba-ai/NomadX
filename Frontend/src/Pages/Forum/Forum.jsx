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
        <div className="w-full max-w-4xl mt-8">
          {/* Forum Topics */}
          <div className="space-y-6">
            {/* Sample Topic 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">Best co-working spaces in Bali</h3>
                    <p className="text-sm text-gray-500">Posted by @digitalnomad123 • 2 hours ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Work</span>
              </div>
              <p className="text-gray-700 mb-4">Hey everyone! I'm heading to Bali next month and I'm looking for recommendations on the best co-working spaces. Any suggestions?</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  <span>24 replies</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  <span>8 likes</span>
                </span>
              </div>
            </div>

            {/* Sample Topic 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">Visa requirements for digital nomads in Portugal</h3>
                    <p className="text-sm text-gray-500">Posted by @travelexpert • 1 day ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Visa</span>
              </div>
              <p className="text-gray-700 mb-4">I'm considering moving to Portugal as a digital nomad. Does anyone have recent experience with their visa process? Any tips or challenges to be aware of?</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  <span>36 replies</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  <span>15 likes</span>
                </span>
              </div>
            </div>

            {/* Add more topic items here */}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Load More Topics
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forum;

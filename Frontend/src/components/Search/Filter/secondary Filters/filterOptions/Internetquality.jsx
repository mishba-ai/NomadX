
export default function Internetquality() {
  return (
    <div className="w-full h-full   bg-[#] rounded-xl text-white font-montserrat">
      <h2 className="text-2xl font-semibold mb-6">Internet Quality</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="minSpeed" className="block text-sm font-medium text-gray-400 mb-2">
            Minimum Download Speed (Mbps)
          </label>
          <input
            type="range"
            id="minSpeed"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>0 Mbps</span>
            <span>100 Mbps</span>
          </div>
        </div>
        <div>
          <label htmlFor="reliability" className="block text-sm font-medium text-gray-400 mb-2">
            Reliability
          </label>
          <select
            id="reliability"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
            <span className="text-gray-300">Include 5G availability</span>
          </label>
        </div>
      </div>
      <button className="mt- w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        Apply Filter
      </button>
    </div>
  )
}

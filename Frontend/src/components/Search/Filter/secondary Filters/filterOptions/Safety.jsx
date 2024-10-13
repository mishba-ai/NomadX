
export default function Safety() {
  return (
    <div>

    <div className="w-[520px] h-[340px] bg-[#000] rounded-xl text-white font-montserrat p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Safety Preferences</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="overallSafety" className="block text-sm font-medium text-gray-400 mb-2">
            Overall Safety Rating
          </label>
          <select
            id="overallSafety"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="veryHigh">Very High</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Specific Safety Concerns
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Crime', 'Political Stability', 'Health Risks', 'Natural Disasters'].map((concern) => (
              <label key={concern} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
                <span className="text-gray-300">{concern}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="travelAdvisories" className="block text-sm font-medium text-gray-400 mb-2">
            Travel Advisories
          </label>
          <select
            id="travelAdvisories"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="noWarnings">No Warnings</option>
            <option value="exerciseCaution">Exercise Caution</option>
            <option value="reconsiderTravel">Reconsider Travel</option>
            <option value="doNotTravel">Do Not Travel</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
            <span className="text-gray-300">LGBTQ+ Friendly Destinations</span>
          </label>
        </div>

        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
            <span className="text-gray-300">Solo Traveler Friendly</span>
          </label>
        </div>
      </div>

      <button className="mt-6 w-full bg-[#b4dff4] hover:bg-[#a7e3fe] text-black font-bold py-2 px-4 rounded-full transition duration-300">
        Apply Safety Filter
      </button>
    </div>
    </div>
  )
}

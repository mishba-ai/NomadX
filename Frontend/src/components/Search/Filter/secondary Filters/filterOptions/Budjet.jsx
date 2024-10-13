

export default function Budjet() {
  return (
    <div>
    <div className="w-[520px] h-[340px] bg-[#000] rounded-xl text-white font-montserrat p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Budget for Digital Nomads</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="monthlyBudget" className="block text-sm font-medium text-gray-400 mb-2">
            Monthly Budget (USD)
          </label>
          <input
            type="range"
            id="monthlyBudget"
            min="500"
            max="5000"
            step="100"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$500</span>
            <span>$5000+</span>
          </div>
        </div>

        <div>
          <label htmlFor="accommodation" className="block text-sm font-medium text-gray-400 mb-2">
            Accommodation Type
          </label>
          <select
            id="accommodation"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="hostel">Hostel</option>
            <option value="apartment">Apartment</option>
            <option value="coLiving">Co-living Space</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Included Amenities
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Wi-Fi', 'Workspace', 'Kitchen', 'Laundry'].map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
                <span className="text-gray-300">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="costOfLiving" className="block text-sm font-medium text-gray-400 mb-2">
            Cost of Living Index
          </label>
          <select
            id="costOfLiving"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button className="mt-4 w-full bg-[#b4dff4] hover:bg-[#a7e3fe] text-black font-bold py-2 px-4 rounded-full transition duration-300">
        Apply Budget Filter
      </button>
    </div>
    </div>
  )
}

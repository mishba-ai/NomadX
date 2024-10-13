

export default function Visaease() {
  return (
    <div>

    <div className="w-[520px] h-[340px] bg-[#000] rounded-xl text-white font-montserrat p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Visa Ease Preferences</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="visaType" className="block text-sm font-medium text-gray-400 mb-2">
            Visa Type
          </label>
          <select
            id="visaType"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="tourist">Tourist Visa</option>
            <option value="workVisa">Work Visa</option>
            <option value="digitalNomad">Digital Nomad Visa</option>
            <option value="studentVisa">Student Visa</option>
          </select>
        </div>

        <div>
          <label htmlFor="stayDuration" className="block text-sm font-medium text-gray-400 mb-2">
            Maximum Stay Duration
          </label>
          <select
            id="stayDuration"
            className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="">Any</option>
            <option value="30">Up to 30 days</option>
            <option value="90">Up to 90 days</option>
            <option value="180">Up to 180 days</option>
            <option value="365">Up to 1 year</option>
            <option value="more">More than 1 year</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Visa Requirements
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Visa on Arrival', 'E-Visa Available', 'No Visa Required', 'Embassy Application'].map((requirement) => (
              <label key={requirement} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500" />
                <span className="text-gray-300">{requirement}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="processingTime" className="block text-sm font-medium text-gray-400 mb-2">
            Maximum Processing Time
          </label>
          <input
            type="range"
            id="processingTime"
            min="1"
            max="30"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>1 day</span>
            <span>30 days</span>
          </div>
        </div>
      </div>

      <button className="mt-4 w-full bg-[#b4dff4] hover:bg-[#a7e3fe] text-black font-bold py-2 px-4 rounded-full transition duration-300">
        Apply Visa Ease Filter
      </button>
    </div>
    </div>
  )
}

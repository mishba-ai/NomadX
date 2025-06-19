import Slider from "../../../../ui/Slider";

export default function Airquality() {
  return (
    <div>
      <div className="w-[520px] h-[340px] bg-[#000] rounded-xl text-white font-montserrat p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Air Quality Preferences</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="airQualityIndex"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Minimum Air Quality Index (AQI)
            </label>
            <Slider
              Min_value="1 (excellent)"
              Max_value="500 (Hazardous)"
              Min_range={1}
              Max_range={500}
            />
          </div>

          <div>
            <label
              htmlFor="pollutantConcern"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Primary Pollutant Concern
            </label>
            <select
              id="pollutantConcern"
              className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            >
              <option value="">Any</option>
              <option value="pm25">PM2.5</option>
              <option value="pm10">PM10</option>
              <option value="o3">Ozone (O₃)</option>
              <option value="no2">Nitrogen Dioxide (NO₂)</option>
              <option value="so2">Sulfur Dioxide (SO₂)</option>
              <option value="co">Carbon Monoxide (CO)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Additional Air Quality Factors
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Low Allergens",
                "Low Humidity",
                "Clean Indoor Air",
                "Low Pollution",
              ].map((factor) => (
                <label
                  key={factor}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500"
                  />
                  <span className="text-gray-300">{factor}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500"
              />
              <span className="text-gray-300">
                Only show locations with air quality monitoring stations
              </span>
            </label>
          </div>
        </div>

        <button className="mt-4 w-full bg-[#b4dff4] hover:bg-[#a7e3fe] text-black font-bold py-2 px-4 rounded-full transition duration-300">
          Apply Air Quality Filter
        </button>
      </div>
    </div>
  );
}

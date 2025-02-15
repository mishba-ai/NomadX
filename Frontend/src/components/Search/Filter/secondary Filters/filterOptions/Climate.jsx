import { useState } from "react";
import propTypes from "prop-types";
import api from "../../../../../api.js";

function Climate({ onApplyFilters }) {
  const [minTemp, setMinTemp] = useState("");
  const [MaxTemp, setMaxTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherConditions, setWeatherConditions] = useState([]);
  const [isloading,setIsLoading] = useState(false)
  const [error,setError]=useState(null)

  // Function to handle the apply filters button
  const handleApplyFilters = async () => {
    setError (null)
    const parsedFilters = {
      minTemp: minTemp ? parseInt(minTemp) : null, // Convert to integer if not empty
      maxTemp: MaxTemp ? parseInt(MaxTemp) : null, // Convert to integer if not empty
      humidity,
      weatherConditions,
    };
    try {
      const response = await api.post("search/", 
       parsedFilters);
       onApplyFilters(parsedFilters, response.data);
      // if (!response.ok){
      //   throw new Error("error");
      // }
      console.log("response data:",response.data)
      const climateData = await response.json();
      onApplyFilters(parsedFilters, climateData);
      // toast({
      //   title: "Filters applied successfully",
      //   description: "Your climate preferences have been updated.",
      // });
    }  catch (err) {
      console.error("Error fetching climate data:", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", err.response.data);
        console.error("Error status:", err.response.status);
        setError(`Server error: ${err.response.status}. ${JSON.stringify(err.response.data)}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("Error request:", err.request);
        setError("No response received from server. Please check your connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", err.message);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle the weather conditions
  const handleWeatherConditions = (condition) => {
    // Update the weatherConditions state based on the selected condition
    setWeatherConditions(
      (prev) =>
        prev.includes(condition)
          ? prev.filter((c) => c !== condition) // If condition is already selected, remove it
          : [...prev, condition] // If condition is not selected, add it
    );
  };
  return (
    <div>
      <div className="w-full h-full  bg-[#000] rounded-xl text-white font-montserrat">
        <h2 className="text-2xl font-semibold mb-4">Climate Preferences</h2>
        <div className="space-y-2">
          <div>
            <label
              htmlFor="temperature"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Preferred Temperature Range (°C)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                id="minTemp"
                className="w-20 bg-[#1c1c1c] border border-gray-700 text-white rounded-lg p-2"
                placeholder="Min"
                value={minTemp}
                onChange={(e) => setMinTemp(e.target.value)}
              />
              <span>to</span>
              <input
                type="number"
                id="maxTemp"
                className="w-20 bg-[#1c1c1c] border border-gray-700 text-white rounded-lg p-2"
                placeholder="Max"
                value={MaxTemp}
                onChange={(e) => setMaxTemp(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="humidity"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Preferred Humidity
            </label>
            <select
              id="humidity"
              className="w-full bg-[#1c1c1c] border border-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            >
              <option value="">Any</option>
              <option value="low">Low (0-30%)</option>
              <option value="moderate">Moderate (30-60%)</option>
              <option value="high">High (60-100%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Preferred Weather Conditions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Sunny", "Rainy", "Snowy", "Windy"].map((condition) => (
                <label
                  key={condition}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded bg-gray-700 border-transparent focus:ring-blue-500"
                    checked={weatherConditions.includes(condition)}
                    onChange={() => handleWeatherConditions(condition)}
                  />
                  <span className="text-gray-300">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          <div></div>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          className="mt- w-full bg-[#b4dff4] hover:bg-[#a7e3fe] text-black font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={handleApplyFilters}
        >
          Apply Climate Filters
        </button>
      </div>
    </div>
  );
}

propTypes.Climate = {
  onApplyFilters : propTypes.func.isRequired,
};

export default Climate;

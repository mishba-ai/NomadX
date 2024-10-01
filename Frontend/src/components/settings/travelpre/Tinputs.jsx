import { useState, useEffect } from "react";
import api from "../../../api";

const travelCategories = [
  { key: "destinations", label: "Destinations Visited" },
  { key: "countries", label: "Countries Explored" },
  { key: "continents", label: "Continents Discovered" }
];

function Tinputs() {
  const [travelStats, setTravelStats] = useState({
    destinations: 0,
    countries: 0,
    continents: 0,
  });

  useEffect(() => {
    fetchTravelStats();
  }, []);

  const fetchTravelStats = async () => {
    try {
      const response = await api.get("/api/travelstats");
      setTravelStats(response.data);
    } catch (error) {
      console.error("Error fetching travel stats:", error);
    }
  };

  const handleInputChange = (e, key) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 0, 0), 100);
    setTravelStats(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      await api.post("/api/travelstats", travelStats);
      alert("Travel stats saved successfully");
    } catch (error) {
      console.error("Error saving travel stats:", error);
      alert("Error saving travel stats");
    }
  };

  return (
    <div className="font-Robotomono text-gray-200 w-full max-w-[840px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Travel Stats Settings</h2>
      <div className="space-y-6">
        {travelCategories.map(({ key, label }) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="relative top-3 z-10 left-4 w-40 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500"
            >
              {label}
            </label>
            <input
              type="number"
              id={key}
              value={travelStats[key]}
              onChange={(e) => handleInputChange(e, key)}
              className="border-2 border-gray-700 bg-transparent px-4 py-3 text-lg rounded-2xl"
              min="0"
              max="100"
            />
          </div>
        ))}
        <button
          onClick={handleSave}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Save Travel Stats
        </button>
      </div>
    </div>
  );
}

export default Tinputs;

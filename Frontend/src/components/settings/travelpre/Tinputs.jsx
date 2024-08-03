import { useState, useEffect } from "react";

function Tinputs() {
  const [Travelstats, setTravelstats] = useState({
    destinations: 0,
    countries: 0,
    continents: 0,
  });

  useEffect(() => {
    fetchTravelStats();
  }, []);

  const fetchTravelStats = async () => {
    try {
      const response = await fetch("/api/travelstats");
      const data = await response.json();
      setTravelstats(data);
    } catch (error) {
      console.error("error fetching travelstats", error);
    }
  };

  // handleInputChange function to handle input change for the progress bar percentage
  const handleInputChange = (e, key) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 0, 0), 100); // clamp the value between 0 and 100
    setTravelstats((prev) => ({ ...prev, [key]: value })); // update the state with the new value
  };

  // handleSave function to save the progress bar values
  const handleSave = async () => {
    try {
      await fetch("/api/travelstats", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Travelstats),
      });
      alert("Travel stats saved successfully");
    } catch (error) {
      console.error("error saving travel stats", error);
      // alert('Error saving travel stats');
    }
  };

  return (
    <div>
      <h2>Travel stats settings</h2>
      {/* this is for the object.entries to map through the object and display the key and value */}
      {Object.entries(Travelstats).map(([key, value]) => (
        <div key={key} className="">
          {/* this label is for  use of this is to capitalize the first letter of the key because the key is a string*/} 
          <label htmlFor="">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type="number"
            value={value}
            onChange={(e) => handleInputChange(e, key)}
            min="0"
          />
        </div>
      ))}
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default Tinputs;

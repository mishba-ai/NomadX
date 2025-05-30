import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import api from "../../api"

function Travelstats() {
  const [travelStats, setTravelStats] = useState({
    destinations: 0,
    countries: 0,
    continents: 0,
  });

  

  // progressBars array to store the progress bar values, setters and labels
  const progressBars = [
    {
      value: travelStats.destinations,
      trailColor: "#bef5f4",
      color: "#ffffff",
      label: "Destinations",
      maxVal: 1000,
    },
    {
      value: travelStats.countries,
      trailColor: "#95d2e8",
      color: "#95d2e8",
      label: "Countries",
      maxVal: 195,
    },
    {
      value: travelStats.continents,
      trailColor: "#9dc8f9",
      color: "#9dc8f9",
      label: "Continents",
      maxVal: 7,
    },
  ];

  // fetchTravelStats function to fetch the travel stats
  // const fetchTravelStats = async () => {
  //   try {
  //     const response = await api.get('/api/travel-stats/', {
  //       headers: {
  //         'Authorization': `Token ${localStorage.getItem('token')}`
  //       }
  //     });
  //     setTravelStats(response.data);
  //   } catch (error) {
  //     console.error('Error fetching travel stats:', error);
  //     if (error.response) {
  //       console.error('Response data:', error.response.data);
  //       console.error('Response status:', error.response.status);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchTravelStats();
  // }, []);
  return (
    <div className="mt-8">
      <h3 className="font-medium text-sm font-montserrat">
        So far you&#39;ve been to
      </h3>
      <div className="flex gap-x-4 mt-4">
        {progressBars.map(({ label, value, maxVal, trailColor, color }) => (
          <div key={label} className="w-44 text-center">
            <CircularProgressbarWithChildren
              value={value}
              maxValue={maxVal}
              // text={`${value}%`}
              className="w-32 h-32"
              strokeWidth={5}
              styles={buildStyles({
                textColor: color,
                // pathColor: "#3e98c7",
                trailColor: trailColor,
              })}
            >
              <div className=" flex flex-col justify-center items-center">
                <strong className="text-2xl">{value}</strong>
                <p className="font-thin text-xs">{label}</p>
              </div>
            </CircularProgressbarWithChildren>
            {/* <input type="number" value={value} onChange={(e) =>handleInputChange(e,setter)}
            className="mt-10 w-24"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Travelstats;

import mappin from "../assets/svg/mappin.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function Location() {
  const [location, setLocation] = useState("loading location");

  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.VITE_OPENCAGE_LOCATION_API_KEY}`
            );
            // for debugging
            // console.log("Full API response:", response.data);   const components = response.data.results[0].components;
            // console.log("Components:", components);
           

            const state = response.data.results[0].components.state;
            const country = response.data.results[0].components.country;

            setLocation(`${state}, ${country}`);
          } catch (error) {
            console.error("error fetching location", error);
            setLocation("unable to fetch locaiton");
          }
        },
        (error) => {
          console.error("error fetching location", error);
          setLocation("unable to fetch locaiton");
        }
      );
    } else {
      setLocation("geolocation not supported ");
    }
  };

  //   call the fetchLocation function when the component mounts
  useEffect(() => {
    fetchLocation();
  }, []);
  return (
    <div>
      <div className="flex gap-x-2 mt-2">
        <img src={mappin} className="h-5 w-5" alt="mappin" />
        <p className="text-sm font-Robotomono text-sky-200">
          Today you are in {location}
        </p>
      </div>
    </div>
  );
}

export default Location;

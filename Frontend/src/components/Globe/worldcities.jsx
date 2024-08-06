import { useState, useEffect } from "react";
import Globe from "react-globe.gl";

function WorldCities() {
  const [placesData, setPlacesData] = useState(null);

  useEffect(() => {
    fetch("/src/components/Globe/datasets/populatedplaces.geojson")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text(); // return the response as text
      })
      .then((text) => {
        try {
          const data = JSON.parse(text); // parse the text to JSON object
          console.log("Data loaded:", data);
          if (data.features && Array.isArray(data.features)) {
            // check if the data is an array
            setPlacesData(data.features);
          } else {
            throw new Error("Invalid data structure");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          console.log("Raw data:", text.substring(0, 200)); // print the first 200 characters of the text
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  if (!placesData) return <div>Loading...</div>;

  return (
    <div className="">
      <Globe
        width={450}
        height={330}
        backgroundColor="black"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={placesData}
        pointLat={(d) => d.properties.latitude}
        pointLng={(d) => d.properties.longitude}
        pointLabel={(d) => d.properties.name}
        pointSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
        
        pointDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}//point dot radius is for the size of the points
        pointColor={() => "rgba(186 ,230, 253 , 0.75)"}
        pointResolution={2}//point resolution is for the number of points on the circle of the point 
       //make points circular instead of square
       
        pointAltitude={0.03} //point altitude is for the height of the points

       
      />
    </div>
  );
}

export default WorldCities;

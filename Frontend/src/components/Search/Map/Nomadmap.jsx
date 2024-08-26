import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markermap from "../../../assets/svg/markermap.svg";

function Nomadmap() {

    const cities = [
        {name: "Dubai", lat: 25.276987, lon: 55.296249, image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg", details: "Modern city with great infrastructure for digital nomads."},
        {name: "Bali", lat: -8.409518, lon: 115.188919, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHKACJb-mtGbqZIx6gUxmfuWDGnZgzPPtuw&s", details: "Tropical paradise with a growing digital nomad community."}
      ];


//   const customMarker = new L.icon({
//     iconUrl: markermap,
//     iconSize: [25, 41],
//     iconAnchor: [12.5, 41],
//     popupAnchor: [0, -41],
//   });

//   useEffect(() => {
//     delete L.icon.Default.prototype._getIconUrl;
//     L.icon.Default.mergeOptions({
//       iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//       iconUrl: require("leaflet/dist/images/marker-icon.png"),
//       shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
//     });
//   }, []);
 
  return (
    <div className="w-full pl-16  fixed h-full -z-">
        <MapContainer center={[25.276987, 55.296249]} zoom={3} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
        />
        {cities.map((city, index) => (
          <Marker key={index} position={[city.lat, city.lon]} >
            <Popup>
              <div className="max-w-sm rounded overflow-hidden shadow-lg z-50">
                <img className="w-full" src={city.image} alt={city.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{city.name}</div>
                  <p className="text-gray-700 text-base">
                    {city.details}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="bg-sky-100 hover:bg-sky-200 text-black font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Nomadmap;

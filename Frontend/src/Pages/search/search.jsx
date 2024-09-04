import Filter from "../../components/Search/Filter/Filter";
import Nomadmap from "../../components/Search/Map/Nomadmap";
import CityOverview from "../../components/Search/CityOverview/CityOverview";
import { useState } from "react";

function Search() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showCityOverview, setShowCityOverview] = useState(false); 

  const selectCity = (city) => {
    setSelectedCity(city);
    setShowCityOverview(true);
  };

  const handleBackButton = () =>{
    setSelectedCity(null);
    setShowCityOverview(false);
  }
  return (
    <>
      {" "}
      {/* {!selectedCity && (
        <div className="w-full h-screen flex flex-col bg-[#070707]">
          <Filter /> <Nomadmap selectcity={selectCity} />{" "}
        </div>
      )} */}

      {showCityOverview ? ( <CityOverview city={selectedCity} onBack={handleBackButton} />) :(<div className="w-full h-screen flex flex-col bg-[#070707]">
          <Filter /> <Nomadmap selectcity={selectCity} />{" "}
        </div>)}
    </>
  );
}

export default Search;

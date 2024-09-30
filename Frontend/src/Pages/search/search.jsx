import Filter from "../../components/Search/Filter/Filter";
import Nomadmap from "../../components/Search/Map/Nomadmap";
import CityOverview from "../../components/Search/CityOverview/CityOverview";
import { useState } from "react";
import api from "../../api";

function Search() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showCityOverview, setShowCityOverview] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const selectCity = (city) => {
    setSelectedCity(city);
    setShowCityOverview(true);
  };

  const handleBackButton = () => {
    setSelectedCity(null);
    setShowCityOverview(false);
  };

  const handleSearch = async (SearchParams) => {
    
    try {
      const response = await api.get("/search", { params: SearchParams });
      setSearchResults(response.data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      {" "}
      {/* {!selectedCity && (
        <div className="w-full h-screen flex flex-col bg-[#070707]">
          <Filter /> <Nomadmap selectcity={selectCity} />{" "}
        </div>
      )} */}
      {showCityOverview ? (
        <CityOverview city={selectedCity} onBack={handleBackButton} />
      ) : (
        <div className="w-full h-screen flex flex-col bg-[#070707]">
          <Filter /> <Nomadmap selectcity={selectCity} />{" "}
        </div>
      )}
    </>
  );
}

export default Search;

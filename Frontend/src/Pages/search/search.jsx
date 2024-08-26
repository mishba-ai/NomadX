import Filter from "../../components/Search/Filter/Filter";
import Nomadmap from "../../components/Search/Map/Nomadmap";

function search() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#070707]">
      <Filter />

        {" "}
        <Nomadmap />
     
    </div>
  );
}

export default search;

import React, { useState } from 'react';
import internet from "../../../../assets/svg/filter/internet.svg";
import climate from "../../../../assets/svg/filter/climate.svg";
import safety from "../../../../assets/svg/filter/safety.svg";
import budget from "../../../../assets/svg/filter/budget.svg";
import visa from "../../../../assets/svg/filter/visa.svg";
import air from "../../../../assets/svg/filter/air.svg";
import Internetquality from "./filterOptions/Internetquality";
import Climate from "./filterOptions/Climate";
import Safety from "./filterOptions/Safety";
import Budget from "./filterOptions/Budjet";
import Visaease from "./filterOptions/Visaease";
import Airquality from "./filterOptions/Airquality";

const filterOptions = [
  { name: 'Internet Quality', icon: internet, component: Internetquality },
  { name: 'Climate', icon: climate, component: Climate },
  { name: 'Safety', icon: safety, component: Safety },
  { name: 'Budget', icon: budget, component: Budget },
  { name: 'Visa Ease', icon: visa, component: Visaease },
  { name: 'Air Quality', icon: air, component: Airquality },
];

export default function FilterOptions() {
  const [selectedFilter, setSelectedFilter] = useState('Internet Quality');

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  const SelectedFilterComponent = filterOptions.find(option => option.name === selectedFilter)?.component || Internetquality;

  return (
    <div className="flex  gap-x-10">
      <nav className="w-56">
        <ul className="flex flex-col gap-y-1 text-white font-semibold h-full overflow-x-hidden overflow-y-auto">
          {filterOptions.map((option) => (
            <li key={option.name}>
              <button 
                onClick={() => handleFilterClick(option.name)}
                className={`hover:bg-white gap-x-2 flex hover:bg-opacity-10 w-56 px-3 py-2 rounded-xl
                  ${selectedFilter === option.name ? 'bg-white bg-opacity-10' : ''}`}
              >
                <span className="w-9 h-9 bg-[#141414] flex justify-center items-center rounded-xl border border-gray-700">
                  <img src={option.icon} className="w-5 h-5" alt="" />
                </span>
                <p className="text-center mt-1">{option.name}</p>
              </button>
            </li>
          ))} 
        </ul>
      </nav>
      <div className="flex-grow px-4 pb-4  w-[520px] h-[340px]">
        <SelectedFilterComponent />
      </div>
    </div>
  );
}
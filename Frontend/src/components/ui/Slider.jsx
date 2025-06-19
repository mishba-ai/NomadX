import { useState } from "react";
import PropTypes from "prop-types";

export default function Slider({ Min_value, Max_value, Min_range, Max_range ,steps}) {
  // update the state
  const [value, setValue] = useState(50);
  const [isHovered, setisHovered] = useState(false);

  const min = Min_range;
  const max = Max_range;

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  //calculate the position of the tooltip based on the slider value
  const getToolTipPosition = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `${percentage}%`;
  };
  return (
    <>
      <div className="w-full">
        <div className="relative mb-4">
          {/* tooltip */}
          <div
            className={`absolute -top-12 z-50 transform -translate-x-1/2 transition-all duration-200 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ left: getToolTipPosition() }}
          >
            <div className="bg-gray-800 text-white px-2 py-1 rounded-lg text-sm justify-center flex w-10 h-auto font-medium relative">
              {value}
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          <input
            type="range"
            id="airQualityIndex"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
            step={steps}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((value - min) / (max - min)) * 100}%, #374151 ${((value - min) / (max - min)) * 100}%, #374151 100%)`,
            }}
          />

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>{Min_value}</span>
            <span>{Max_value}</span>
          </div>
        </div>
      </div>
    </>
  );

  
}


Slider.propTypes = {
  Max_range: PropTypes.number.isRequired,
  Min_range: PropTypes.number.isRequired,
  Max_value: PropTypes.string.isRequired,
  Min_value: PropTypes.string.isRequired,
  steps:PropTypes.number
};
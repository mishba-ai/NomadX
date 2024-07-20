import { useState } from "react";

function Tooltip({children,text}) {
  const [isVisibile, setIsVisible] = useState(false);
  return (
    <div>
      <div
        className="group relative flex flex-col "
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisibile && (
          <span className="invisible absolute -top-9 py-1 px-2  text-white bg-[#1c1c1c]  font-mono  text-center rounded-md group-hover:visible text-xs ">
            {text} <div className="triangle"></div>
          </span>
        )}
      </div>
    </div>
  );
}

export default Tooltip;

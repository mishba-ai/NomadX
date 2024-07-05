import React, { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Map</h1>
      <div className="w-[1400px] border-double">
        <ComposableMap data-tip="">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      {/* react map  */}
    </div>
  );
}

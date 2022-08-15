import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoUrl } from "../../../data";



export const Map = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoUrl } from "../../../data";
import { capitalizeName } from "../../../functions/capitalizeName";
import { MapContainer } from "./map.styled";

export const Map = () => {
  const { basicInfo } = useSelector((s: any) => s.info);

  return (
    <MapContainer>
      <ComposableMap>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo: any) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[basicInfo.lon, basicInfo.lat]}>
            <circle r={4} fill="#F53" />
          </Marker>
          <Annotation
            subject={[basicInfo.lon, basicInfo.lat]}
            dx={-60}
            dy={-20}
            connectorProps={{
              stroke: "#F53",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}>
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              fontSize={18}
              fontWeight={500}>
              {capitalizeName(basicInfo.name)}
            </text>
          </Annotation>
        </ZoomableGroup>
      </ComposableMap>
    </MapContainer>
  );
};

import React from "react";
import { MainContextType } from "../types";

export const MainContext = React.createContext<MainContextType>({
  location: "",
  setLocation: (place: string) => {},
  feature: "",
  setFeature: (f: string) => {},
  infoType: "weather",
  setInfoType: (info: string) => {},
  info: {
    name: "london",
    country: "GB",
    lat: 51.50853,
    lon: -0.12574,
    population: 7556900,
    timezone: "Europe/London",
    status: "OK",
  },
  attractions: [],
  setAttractions:(a:any[])=>{},
  getAttractions: () => { },
   getDetailedInfo: (id: string) => {},
  detailedInfo: {},
  setDetailedInfo: (id: string) => {},
});

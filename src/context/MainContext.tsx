import React from "react";
import { InfoType, MainContextType } from "../types";

export const MainContext = React.createContext<MainContextType>({
  location: "",
  setLocation: (place: string) => {},
  feature: "",
  setFeature: (f: string) => {},
  infoType: "weather",
  setInfoType: (info: string) => { },
  info: {},
});

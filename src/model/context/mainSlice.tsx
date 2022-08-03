import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoType } from "../../types";

const initialState = {
  place: "",
  basicInfo: {},
  attractions: [],
  infoType: "",
  attractionDetails: {},
  map: {},
  weather: {
    apparentTemperature: 0,
    cloudCover: 0,
    dewPoint: 0,
    humidity: 0,
    icon: "",
    lat: 0,
    lng: 0,
    ozone: 0,
    precipIntensity: 0,
    pressure: 0,
    summary: "",
    temperature: 0,
    time: 0,
    uvIndex: 0,
    visibility: 0,
    windBearing: 0,
    windGust: 0,
    windSpeed: 0,
  },
};

export type MainSlice = typeof initialState;

export const mainSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setPlace: (state: any, action: PayloadAction<string>) => {
      return { ...state, place: action.payload };
    },
    setBasicInfo: (state: any, action: PayloadAction<InfoType>) => {
      return { ...state, basicInfo: { ...action.payload } };
    },
    setInfoType: (state: any, action: PayloadAction<string>) => {
      return { ...state, infoType: action.payload };
    },
    setAttractions: (state: any, action: PayloadAction<InfoType>) => {
      return { ...state, attractions: action.payload };
    },
    setAttractionDetails: (state: any, action: PayloadAction<InfoType>) => {
      return { ...state, attractionDetails: action.payload };
    },
    setMap: (state: any, action: PayloadAction<InfoType>) => {
      return { ...state, map: action.payload };
    },
    setWeather: (state: any, action: PayloadAction<InfoType>) => {
      return { ...state, weather: action.payload  };
    },
  },
});
export const {
  setPlace,
  setBasicInfo,
  setInfoType,
  setAttractions,
  setAttractionDetails,
  setMap,
  setWeather,
} = mainSlice.actions;
export default mainSlice.reducer;

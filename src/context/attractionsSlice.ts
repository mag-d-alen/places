import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useGetAttractions } from "../hooks/useGetAttractions";
import { useGetAttractionDetails } from "../hooks/useGetAttractionDetails";
import { getData } from "../hooks/getData";
import { getCoordinates } from "../hooks/getCoordinates";

const initialState = {
  loading: false,
  error: "",
  attractions: {},
  attractionDetails: {},
  info: {},
};

const attractionSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInfo:  (state: any, action: any) => {
      getData({ route: "place", data: action.payload })
        .then((body) => state.info(body))
        .catch((err) => console.log(err));
    },
    setAttractions: (state: any, action: any) => {
      console.log(action.payload);
      getData({
        route: "attractions",
        data: getCoordinates(action.payload),
        headers: { accept: "application/json" },
      })
        .then((body) => {
          console.log(body);
          state.attractions = body?.features;
        })
        .catch((err) => console.log(err));
    },
    setAttractionDetails: (state: any, action: any) => {
      console.log(action.payload);
      getData({
        route: "details",
        data: action.payload,
      })
        .then((body) => {
          state.attractionDetails = body;
        })
        .catch((err) => console.log(err));
    },
  },
});

export const { setAttractions, setAttractionDetails, setInfo } = attractionSlice.actions;
export default attractionSlice.reducer;

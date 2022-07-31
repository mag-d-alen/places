import { ActionTypes } from "@mui/base";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    place: "",
    basicInfo:{}
}

export const infoStore = createSlice({
  name: "info",
  initialState: initialState,
  reducers: {
    setPlace: (state, action) => {
   state.place = action.payload;
      },
      getBasicInfo: (state, action) => {
    state.basicInfo= getInfo()
      }
  },
});

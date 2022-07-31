import { options } from "../data";
import { configureStore } from "@reduxjs/toolkit";
import { useGetAttractions } from "../hooks/useGetAttractions";
import { useGetInfo } from "../hooks/useGetInfo";
import { useGetLocation } from "../hooks/useGetLocation";
import attractionsReducer from "./attractionsSlice"

export const store = configureStore({
    reducer: {
        attractions: attractionsReducer
  },
});



// export const mainReducer = (state: any, action: { type: string }) => {
//   switch (action.type) {
//     case "SET_INFO_TYPE":
//       const infoType = options[1];
//       return { ...state, infoType };
//     case "SET_ATTRACTIONS":
//       const attractions = useGetAttractions();
//       return { ...state, attractions };
//     case "SET_INFO":
//       const info = useGetInfo();
//       return { ...state, info };
//     case "SET_LOCATION":
//       const location = useGetLocation(state.infoType);
//       return { ...state, location };
//     default:
//       return state;
//   }
// };


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
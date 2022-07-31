import React, { useContext, useEffect, useReducer, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { LocationInput, SearchContainer } from "./homePage.styled";
import { useDispatch } from "react-redux";
import { setInfo } from "../../context/attractionsSlice";

export const Search: React.FC<{
  newLocation: string;
  setNewLocation: (place: string) => void;
}> = ({ newLocation, setNewLocation }) => {
  const { setLocation } = useContext(MainContext);
  const dispatch = useDispatch();
  const chooseLocation = () => {
    dispatch(setInfo(newLocation));
  };

  return (
    <SearchContainer>
      <LocationInput
        value={newLocation}
        onChange={(e) => setNewLocation(e.target.value)}
      />
      <button onClick={chooseLocation}>submit</button>
    </SearchContainer>
  );
};

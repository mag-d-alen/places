import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { MainContextType } from "../../types";
import { LocationInput, SearchContainer } from "./homePage.styled";

export const Search: React.FC<{
  newLocation: string;
  setNewLocation: (place: string) => void;
}> = ({ newLocation, setNewLocation }) => {
  const { setLocation, setAttractions } = useContext(
    MainContext
  ) as MainContextType;

  useEffect(() => {
    setAttractions([]);
  }, [newLocation]);

  const chooseLocation = () => {
    setLocation(newLocation);
    setNewLocation("");
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

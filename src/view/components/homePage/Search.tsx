import { LocationInput, SearchContainer } from "./homePage.styled";
import { useDispatch } from "react-redux";
import { setPlace } from "../../../model/context/mainSlice";
import { useState } from "react";
import { useGetInfo } from "../../../controller/hooks/useGetInfo";

export const Search: React.FC = () => {
  const [newLocation, setNewLocation] = useState("");
  const dispatch = useDispatch();

  const handleSetPlace = () => {
    dispatch(setPlace(newLocation));
  };
  useGetInfo();

  return (
    <SearchContainer>
      <LocationInput
        value={newLocation}
        onChange={(e) => setNewLocation(e.target.value)}
      />
      <button onClick={() => handleSetPlace()}>Submit</button>
    </SearchContainer>
  );
};

import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { capitalizeName } from "../../hooks/capitalizeName";
import { useGetInfo } from "../../hooks/useGetInfo";
import { MainContextType } from "../../types";
import { AttractionCards } from "./AttractionCards";
import { Header } from "./Header";
import { HomeContainer, SelectionsContainer } from "./homePage.styled";
import { MainInfo } from "./MainInfo";
import { Search } from "./Search";
import { Select } from "./Select";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const { location } = useContext(MainContext) as MainContextType;
  const attractions = useSelector((storeState: any) => storeState.attractions);

  const [newLocation, setNewLocation] = useState("");
  const info = useGetInfo();
  return (
    <HomeContainer>
      <Header location={location} />
      <SelectionsContainer>
        <Search setNewLocation={setNewLocation} newLocation={newLocation} />
        <h1>{capitalizeName(location)}</h1>
        {info?.country ? <MainInfo /> : null}
        {location ? <Select /> : null}
        {attractions ? <AttractionCards /> : null}
      </SelectionsContainer>
    </HomeContainer>
  );
};

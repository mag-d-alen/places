import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { capitalizeName } from "../../hooks/capitalizeName";
import { MainContextType } from "../../types";
import { AttractionCard } from "./AttractionCard";
import { AttractionCards } from "./AttractionCards";
import { DetailsModal } from "./DetailsModal";
import { Header } from "./Header";
import { HomeContainer, SelectionsContainer } from "./homePage.styled";
import { MainInfo } from "./MainInfo";
import { Search } from "./Search";
import { Select } from "./Select";

export const Home: React.FC = () => {
  const { location, info, detailedInfo, infoType } = useContext(
    MainContext
  ) as MainContextType;

  const [newLocation, setNewLocation] = useState("");
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
  };

  useEffect(() => {
    detailedInfo && infoType === options[1] && setIsDetailModalOpen(true);
  }, [detailedInfo]);

  return (
    <HomeContainer>
      <Header location={location} />
      <SelectionsContainer>
        <Search setNewLocation={setNewLocation} newLocation={newLocation} />
        <h1>{capitalizeName(location)}</h1>
        {info?.country ? <MainInfo info={info} /> : null}
        {location ? <Select /> : null}
        <AttractionCards />
        {isDetailModalOpen && detailedInfo && infoType == options[1] ? (
          <DetailsModal
            open={isDetailModalOpen}
            closeModal={handleCloseModal}
          />
        ) : null}
      </SelectionsContainer>
    </HomeContainer>
  );
};

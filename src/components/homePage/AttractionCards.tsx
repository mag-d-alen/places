import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { AttractionCard } from "./AttractionCard";
import { AttractionCardsContainer } from "./homePage.styled";

export const AttractionCards: React.FC = () => {
  const { attractions, infoType, getDetailedInfo } = useContext(MainContext);
  return (
    <AttractionCardsContainer>
      {attractions && infoType == options[1]
        ? attractions.map((a) => {
            return (
              <AttractionCard
                key={a.properties.xid}
                attraction={a.properties}
              />
            );
          })
        : null}
    </AttractionCardsContainer>
  );
};

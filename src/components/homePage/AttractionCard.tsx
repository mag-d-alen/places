import React, { useContext } from "react";
import { AttractionType } from "../../types";
import {
  AttractionCardContainer,
  AttractionName,
  AttractionCategory,
} from "../../view/components/homePage/homePage.styled";

export const AttractionCard: React.FC<{
  attraction: AttractionType;
  handleClick: (id: string) => void;
}> = ({ attraction, handleClick }) => {
  return (
    <AttractionCardContainer onClick={() => handleClick(attraction.xid)}>
      <AttractionName>{attraction.name}</AttractionName>
      {attraction.kinds.split(",").map((k: string) => (
        <AttractionCategory key={k}>{k}</AttractionCategory>
      ))}
    </AttractionCardContainer>
  );
};

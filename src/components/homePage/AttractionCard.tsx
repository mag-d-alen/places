import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { AttractionType } from "../../types";
import {
  AttractionName,
  AttractionCategory,
  Button,
  AttractionCardContainer,
} from "./homePage.styled";

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

import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { AttractionType } from "../../types";
import {
  AttractionName,
  AttractionCategory,
  Button,
  AttractionCardContainer,
} from "./homePage.styled";

export const AttractionCard: React.FC<{ attraction: AttractionType }> = ({
  attraction,
}) => {
  const { getDetailedInfo } = useContext(MainContext);
  return (
    <AttractionCardContainer
      key={attraction.xid}
      onClick={() => getDetailedInfo(attraction.xid)}>
      <AttractionName>{attraction.name}</AttractionName>
      {attraction.kinds.split(",").map((k: string) => (
        <AttractionCategory>{k}</AttractionCategory>
      ))}
    </AttractionCardContainer>
  );
};

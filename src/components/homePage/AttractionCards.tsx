import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { useGetAttractions } from "../../hooks/useGetAttractions";
import { AttractionCard } from "./AttractionCard";
import { AttractionCardsContainer } from "./homePage.styled";
import { useSelector } from "react-redux";

export const AttractionCards: React.FC = () => {
  const { infoType } = useContext(MainContext);
  const attractions = useSelector((storeState: any) => storeState.attractions);
  console.log(attractions);
  return (
    <AttractionCardsContainer>
      {attractions && infoType == options[1]
        ? attractions?.map((a: any) => (
            <AttractionCard key={a.properties.xid} attraction={a.properties} />
          ))
        : null}
    </AttractionCardsContainer>
  );
};

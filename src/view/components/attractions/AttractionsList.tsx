import { LinearProgress } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { isConditionalExpression } from "typescript";
import { setLimit } from "../../../model/context/mainSlice";
import { AttractionCard } from "./AttractionCard";
import { AttractionCategory } from "./AttractionCategory";
import { AttractionsFilters } from "./AttractionsFilters";
import {
  Button,
} from "../homePage/homePage.styled";
import { AttractionCardsContainer } from "./attractions.styled";

export const AttractionsList: React.FC<{ attractions: any[] }> = ({
  attractions,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <AttractionsFilters attractions={attractions} />
      <AttractionCardsContainer>
        {attractions.length ? (
          attractions?.map((a: any) => (
            <AttractionCard key={a.id} attraction={a.properties} />
          ))
        ) : (
          <LinearProgress />
        )}
      </AttractionCardsContainer>
      <Button onClick={() => dispatch(setLimit())}>See more</Button>
    </>
  );
};

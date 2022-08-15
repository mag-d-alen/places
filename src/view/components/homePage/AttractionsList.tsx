import { LinearProgress } from "@mui/material";
import React from "react";
import { isConditionalExpression } from "typescript";
import { AttractionCard } from "./AttractionCard";
import { AttractionCategory } from "./AttractionCategory";
import { AttractionsFilters } from "./AttractionsFilters";
import {
  AttractionCardsContainer,
  AttractionCategoriesListContainer,
} from "./homePage.styled";

export const AttractionsList: React.FC<{ attractions: any[] }> = ({
  attractions,
}) => {
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
    </>
  );
};

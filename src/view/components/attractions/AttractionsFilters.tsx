import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilters } from "../../../functions/getAllFilters";
import { setCategoryFilter } from "../../../model/context/mainSlice";
import { AttractionCategory } from "./AttractionCategory";
import { Button } from "../homePage/homePage.styled";
import { AttractionCategoriesListContainer } from "./attractions.styled";
import { Typography } from "@mui/material";

export const AttractionsFilters: React.FC<{ attractions: any[] }> = ({
  attractions,
}) => {
  const dispatch = useDispatch();
  const filtersAreNotSet = !!(
    useSelector((s: any) => s.info.filteredAttractions).length < 1
  );
  return (
    <>
      <Typography>Filter by category</Typography>
      <AttractionCategoriesListContainer>
        {getAllFilters(attractions).map((k: string) => (
          <AttractionCategory key={k} category={k} />
        ))}
      </AttractionCategoriesListContainer>
      <Button
        disabled={filtersAreNotSet}
        onClick={() => dispatch(setCategoryFilter(""))}>
        Clear Filters
      </Button>
    </>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilters } from "../../../functions/getAllFilters";
import { setCategoryFilter } from "../../../model/context/mainSlice";
import { AttractionCategory } from "./AttractionCategory";
import { AttractionCategoriesListContainer, Button } from "./homePage.styled";

export const AttractionsFilters: React.FC<{ attractions: any[] }> = ({
  attractions,
}) => {
  const dispatch = useDispatch();
  const filtersAreNotSet = !!(
    useSelector((s: any) => s.info.filteredAttractions).length < 1
  );
  return (
    <>
      <div>Filter by category</div>
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

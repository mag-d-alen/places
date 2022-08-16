import React from "react";
import { useDispatch } from "react-redux";
import { capitalizeName } from "../../../functions/capitalizeName";
import { processCategoryName } from "../../../functions/processCategoryName";
import { setCategoryFilter } from "../../../model/context/mainSlice";
import { AttractionCategoryContainer } from "./attractions.styled";

export const AttractionCategory: React.FC<{ category: string }> = ({
  category,
}) => {
  const dispatch = useDispatch();

  return (
    <AttractionCategoryContainer
      onClick={() => dispatch(setCategoryFilter(category))}>
      {capitalizeName(processCategoryName(category))}{" "}
    </AttractionCategoryContainer>
  );
};

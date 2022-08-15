import React, { useState } from "react";
import { capitalizeName } from "../../../functions/capitalizeName";
import { processCategoryName } from "../../../functions/processCategoryName";
import { AttractionType } from "../../../types";
import { DetailsModal } from "./DetailsModal";
import {
  AttractionName,
  AttractionCardContainer,
  AttractionCategoriesListContainer,
} from "./attractions.styled"

export const AttractionCard: React.FC<{
  attraction: AttractionType;
}> = ({ attraction }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const getDetailedInfo = () => {
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <>
      {isDetailModalOpen ? (
        <DetailsModal
          open={isDetailModalOpen}
          closeModal={handleCloseModal}
          id={attraction.xid}
        />
      ) : null}
      <AttractionCardContainer onClick={() => getDetailedInfo()}>
        <AttractionName>{attraction.name}</AttractionName>{" "}
        <AttractionCategoriesListContainer>
          {attraction.kinds.split(",").map((k: string) => (
            <div style={{ marginLeft: "0.4rem", color: "darkblue" }} key={k}>
              {capitalizeName(processCategoryName(k))}
              {" * "}
            </div>
          ))}
        </AttractionCategoriesListContainer>
      </AttractionCardContainer>
    </>
  );
};

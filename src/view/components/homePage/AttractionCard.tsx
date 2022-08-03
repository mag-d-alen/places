import React, { useState } from "react";
import { AttractionType } from "../../../types";
import { DetailsModal } from "./DetailsModal";
import {
  AttractionName,
  AttractionCategory,
  AttractionCardContainer,
} from "./homePage.styled";

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
        <AttractionName>{attraction.name}</AttractionName>
        {attraction.kinds.split(",").map((k: string) => (
          <AttractionCategory key={k}>{k}</AttractionCategory>
        ))}
      </AttractionCardContainer>
    </>
  );
};

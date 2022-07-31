import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { getData } from "../../hooks/useGetData";
import { AttractionType } from "../../types";
import { DetailsModal } from "./DetailsModal";
import {
  AttractionName,
  AttractionCategory,
  Button,
  AttractionCardContainer,
} from "./homePage.styled";

export const AttractionCard: React.FC<{
  attraction: AttractionType;
}> = ({ attraction }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const { infoType } = useContext(MainContext);
  const [detailedInfo, setDetailedInfo] = useState<any>({});

  const getDetailedInfo = () => {
    if (infoType !== options[1]) return;
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
          detailedInfo={detailedInfo}
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

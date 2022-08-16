import React, { Fragment, useState } from "react";
import { capitalizeName } from "../../../functions/capitalizeName";
import { processCategoryName } from "../../../functions/processCategoryName";
import { AttractionType } from "../../../types";
import { DetailsModal } from "./DetailsModal";
import {
  AttractionName,
  AttractionCardContainer,
  AttractionTag,
  AttractionTags,
} from "./attractions.styled";

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
        <AttractionTags>
          {attraction.kinds.split(",").map((k: string) => (
            <Fragment key={k}>
              <AttractionTag>
                {capitalizeName(processCategoryName(k))}
              </AttractionTag>
              <span>&#183;</span>
            </Fragment>
          ))}
        </AttractionTags>
      </AttractionCardContainer>
    </>
  );
};

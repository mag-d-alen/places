import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { setPronoun } from "../../lib";
import { HeaderContainer } from "./homePage.styled";

export const Header: React.FC<{ newLocation: string }> = ({ newLocation }) => {
  const { infoType } = useContext(MainContext);


  return (
    <HeaderContainer>
      Welcome to {newLocation}! <br />
      {infoType ? infoType : null}
      {newLocation ? (
        <>
          {setPronoun({infoType, newLocation})} {newLocation.toLocaleUpperCase()}
        </>
      ) : null}
    </HeaderContainer>
  );
};

import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { capitalizeName } from "../../hooks/capitalizeName";
import { setPronoun } from "../../lib";
import { HeaderContainer } from "./homePage.styled";

export const Header: React.FC<{ location: string }> = ({ location }) => {
  const { infoType } = useContext(MainContext);

  return (
    <HeaderContainer>
      Welcome
      {location ? ` to ${capitalizeName(location)}!` : "!"}
      <br />
      {infoType ? infoType : null}
      {location ? (
        <>
          {setPronoun({ infoType, location })} {location.toLocaleUpperCase()}
        </>
      ) : null}
    </HeaderContainer>
  );
};

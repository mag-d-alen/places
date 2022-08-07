import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { capitalizeName } from "../../functions/capitalizeName";
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

import React from "react";
import { InfoContainer } from "./homePage.styled";
import { InfoType } from "../../types";

export const MainInfo: React.FC<{ info: InfoType }> = ({info}) => {
  return (
    <InfoContainer>
      <div>{info.country}</div>
      <div>{info.lat}</div>
      <div>{info.lon}</div>
      <div>{info.timezone}</div>
    </InfoContainer>
  );
};

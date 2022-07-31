import React from "react";
import { InfoContainer } from "./homePage.styled";
import { InfoType } from "../../types";
import { useGetInfo } from "../../hooks/useGetInfo";

export const MainInfo: React.FC = () => {
    const info= useGetInfo()
  return (
    <InfoContainer>
      <div>{info.country}</div>
      <div>{info.lat}</div>
      <div>{info.lon}</div>
      <div>{info.timezone}</div>
    </InfoContainer>
  );
};

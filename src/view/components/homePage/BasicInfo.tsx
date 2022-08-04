import React from "react";
import { InfoContainer } from "./homePage.styled";

export const BasicInfo: React.FC<{ basicInfo: any }> = ({ basicInfo }) => {
  return (
    <InfoContainer>
      <div>{basicInfo.country}</div>
      <div>{basicInfo.lat}</div>
      <div>{basicInfo.lon}</div>
      <div>{basicInfo.timezone}</div>
    </InfoContainer>
  );
};

import { Typography } from "@mui/material";
import React from "react";
import { InfoContainer } from "./homePage.styled";

export const BasicInfo: React.FC<{ basicInfo: any }> = ({ basicInfo }) => {
  const code = basicInfo.country.toLowerCase();
  return (
    <>
      <InfoContainer>
        <Typography>Country: {basicInfo.country}</Typography>
        <img src={`https://flagcdn.com/16x12/${code}.png`} />
        <Typography>Time zone : {basicInfo.timezone}</Typography>
      </InfoContainer>
    </>
  );
};

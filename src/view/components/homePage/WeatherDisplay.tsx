import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { WeatherType } from "../../../types";
import { WeatherContainer, WeatherRow } from "./homePage.styled";

export const WeatherDisplay: React.FC = () => {
  const weather: WeatherType = useSelector((s: any) => s.info.weather);

  return (
    <WeatherContainer>
      {weather.temperature ? (
        Object.entries(weather)
          .filter(([key, value]) => {
            return key !== "lng" && key !== "lat";
          })
          .map(([key, value]) => {
            const newKey = key.split(/(?=[A-Z])/);
            return (
              <WeatherRow key={key}>
                {newKey.map((word) => `${word.toUpperCase()} `)}
                <div>{value}</div>
              </WeatherRow>
            );
          })
      ) : (
        <LinearProgress />
      )}
    </WeatherContainer>
  );
};

import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { addUnit } from "../../../functions/addUnit";
import { WeatherType } from "../../../types";
import { WeatherContainer, WeatherRow } from "./homePage.styled";

export const WeatherDisplay: React.FC = () => {
  const weather: WeatherType = useSelector((s: any) => s.info.weather);

  return (
    <WeatherContainer>
      {weather.temperature ? (
        Object.entries(weather)
          .filter(([key, value]) => {
            return (
              key !== "lng" &&
              key !== "lat" &&
              key !== "time" &&
              key !== "visiblity" &&
              key !== "dewPoint" &&
              key !== "ozone"
            );
          })
          .map(([key, value]) => {
            const weatherCategory = key.split(/(?=[A-Z])/);
            return (
              <WeatherRow key={key}>
                {weatherCategory.map((word) => `${word.toUpperCase()} `)}
                <div>
                  {value} {addUnit(key)}
                </div>
              </WeatherRow>
            );
          })
      ) : (
        <LinearProgress />
      )}
    </WeatherContainer>
  );
};

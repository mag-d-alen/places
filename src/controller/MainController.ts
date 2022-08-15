import { useGetAttractions } from "./hooks/useGetAttractions";
import { useGetInfo } from "./hooks/useGetInfo";
import { useGetMap } from "./hooks/useGetMap";
import { useGetWeather } from "./hooks/useGetWeather";

export const MainController = () => {
  useGetInfo();
  useGetAttractions(8);
  useGetMap();
  useGetWeather();
  return null;
};

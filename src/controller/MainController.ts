import { useGetAttractions } from "./hooks/useGetAttractions";
import { useGetMap } from "./hooks/useGetMap";
import { useGetWeather } from "./hooks/useGetWeather";

export const MainController = () => {
  useGetAttractions();
  useGetMap();
  useGetWeather();
  return null;
};

import { InfoType } from "../types";

export const getCoordinates = (info: InfoType) => {
  return info.lon && info.lat
    ? `${info.lon - 0.5}&${info.lon + 0.5}&${info.lat - 0.5}&${info.lat + 0.5}`
    : {};
};

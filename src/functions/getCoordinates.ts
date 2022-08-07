import { options } from "../data";
import { InfoType } from "../types";

export const getCoordinates = (infoType: string, info: InfoType) => {
  if (!info.lat || !info.lon) {
    return {};
  }
  return infoType === options[1]
    ? `${info.lat}&${info.lon}`
    : `${info.lon - 0.5}&${info.lon + 0.5}&${info.lat - 0.5}&${info.lat + 0.5}`;
};

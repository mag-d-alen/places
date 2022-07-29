import { options } from "./data";

export const setPronoun = ({
  newLocation,
  infoType,
}: {
  newLocation: string;
  infoType?: string;
}) => {
  if (!newLocation) return;
  switch (infoType) {
    case options[0]:
    case options[1]:
      return " in ";
      break;
    case options[2]:
      return " of ";
      break;
    default:
      return " of ";
  }
};

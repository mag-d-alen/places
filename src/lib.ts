import { options } from "./data";

export const setPronoun = ({
  location,
  infoType,
}: {
  location?: string;
  infoType?: string;
}) => {
  if (!location) return;
  switch (infoType) {
    case options[0]:
    case options[1]:
      return " in ";
    case options[2]:
      return " of ";
    default:
      return " of ";
  }
};

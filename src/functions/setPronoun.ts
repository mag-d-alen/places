import { options } from "../data";

export const setPronoun = ({
  place,
  infoType,
}: {
  place?: string;
  infoType?: string;
}) => {
  if (!place) return;
  switch (infoType) {
    case options[1]:
    case options[2]:
      return " in ";
    case options[3]:
      return " of ";
    default:
      return " in ";
  }
};

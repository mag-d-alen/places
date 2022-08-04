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
    case options[0]:
    case options[1]:
      return " in ";
    case options[2]:
      return " of ";
    default:
      return " of ";
  }
};

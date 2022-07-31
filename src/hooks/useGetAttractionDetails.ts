import { useState } from "react";
import { getData } from "./getData";

export const useGetAttractionDetails = (id: string) => {
  const [attractionDetails, setAttractionDetails] = useState({});
  getData({
    route: "details",
    data: id,
  })
    .then((body) => {
      setAttractionDetails(body);
    })
    .catch((err) => console.log(err));
  return attractionDetails;
};

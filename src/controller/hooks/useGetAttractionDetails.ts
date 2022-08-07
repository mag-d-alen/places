import { useDispatch } from "react-redux";
import { getData } from "../../functions/getData";
import { useEffect, useState } from "react";

export const useGetAttractionDetails = (id: string) => {
  const [attractionDetails, setAttractionDetails] = useState<any>();

  useEffect(() => {
    getData({
      route: "details",
      data: id,
    })
      .then((body) => setAttractionDetails(body))
      .catch((err) => console.log(err));
  }, [id]);
  return attractionDetails;
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttractions } from "../../model/context/mainSlice";
import { options } from "../../data";
import { getCoordinates } from "../../functions/getCoordinates";
import { getData } from "../../functions/getData";

export const useGetAttractions = () => {
  const dispatch = useDispatch();
  const { infoType, basicInfo, place, limit } = useSelector((s: any) => s.info);  useEffect(() => {
    if (!basicInfo?.lon || !basicInfo?.lat || infoType !== options[2]) return;
    getData({
      route: "attractions",
      data: getCoordinates(infoType, basicInfo),
      limit: limit,
      headers: { accept: "application/json" },
    })
      .then((body) => {
        dispatch(setAttractions(body.features));
      })
      .catch((err) => console.log(err));
  }, [basicInfo?.lon, !basicInfo?.lat, infoType, place, limit]);
};

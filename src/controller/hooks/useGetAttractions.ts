import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttractions } from "../../model/context/mainSlice";
import { options } from "../../data";
import { getData } from "../../functions/getData";

export const useGetAttractions = () => {
  const dispatch = useDispatch();
  const { infoType, basicInfo, place, limit, filter } = useSelector(
    (s: any) => s.info
  );
  useEffect(() => {
    const { lon, lat } = basicInfo;
    if (!lon || !lat || infoType !== options[2]) return;
    getData({
      route: "attractions",
      lon_min: lon - 0.5,
      lon_max: lon + 0.5,
      lat_min: lat - 0.5,
      lat_max: lat + 0.5,
      limit: limit,
      filter: filter,
      headers: { accept: "application/json" },
    })
      .then((body) => {
        dispatch(setAttractions(body.features));
      })
      .catch((err) => console.log(err));
  }, [basicInfo?.lon, !basicInfo?.lat, infoType, place, limit]);
};

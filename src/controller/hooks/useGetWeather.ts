import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../data";
import { getData } from "../../functions/getData";
import { setWeather } from "../../model/context/mainSlice";

export const useGetWeather = () => {
  const { infoType, basicInfo } = useSelector((s: any) => s.info);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!basicInfo || infoType !== options[1]) return;
    const { lat, lon } = basicInfo;
    getData({
      route: "weather",
      lat: lat,
      lon: lon,
    })
      .then((body) => {
        dispatch(setWeather(body));
      })
      .catch((err) => console.log(err));
  }, [infoType, basicInfo]);
};

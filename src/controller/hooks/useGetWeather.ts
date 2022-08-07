import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../data";
import { getCoordinates } from "../../functions/getCoordinates";
import { getData } from "../../functions/getData";
import { setWeather } from "../../model/context/mainSlice";

export const useGetWeather = () => {
  const { infoType, basicInfo } = useSelector((s: any) => s.info);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!basicInfo || infoType != options[1]) return;
    getData({
      route: "weather",
      data: getCoordinates(infoType, basicInfo),
    })
      .then((body) => {
        dispatch(setWeather(body));
      })
      .catch((err) => console.log(err));
  }, [infoType, basicInfo]);
};

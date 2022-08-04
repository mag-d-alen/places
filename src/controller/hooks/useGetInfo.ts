import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasicInfo } from "../../model/context/mainSlice";
import { InfoType, InitialStateType } from "../../types";
import { getData } from "../../functions/getData";

export const useGetInfo = () => {
  const dispatch = useDispatch();
  const place = useSelector((s: any) => s.info.place);
  const [info, setInfo] = useState<InfoType>({});
  useEffect(() => {
    if (!place) return setInfo({});
    getData({ route: "place", data: place })
      .then((body) => dispatch(setBasicInfo(body)))
      .catch((err) => console.log(err));
  }, [place]);
  return info;
};

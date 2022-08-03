import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetInfo } from "./useGetInfo";
import { setBasicInfo } from "../../model/context/mainSlice";

export const useSetBasicInfo = () => {
  const dispatch = useDispatch();
  const info = useGetInfo();

  const place = useSelector((s: any) => s.place);

  useEffect(() => {
    if (!info) return;
    dispatch(setBasicInfo(info));
  }, [place]);
};

import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import { InfoType } from "../types";
import { getData } from "./getData";

export const useGetInfo = () => {
  const { location } = useContext(MainContext);
  const [info, setInfo] = useState<InfoType>({});
  useEffect(() => {
    if (!location) return setInfo({});
    getData({ route: "place", data: location })
      .then((body) => setInfo(body))
      .catch((err) => console.log(err));
  }, [location]);
  return info;
};

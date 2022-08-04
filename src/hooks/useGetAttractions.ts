import { useEffect, useState } from "react";
import { getCoordinates } from "./getCoordinates";

import { getData } from "./getData";
import { useGetInfo } from "./useGetInfo";

export const useGetAttractions = (info:any) => {
  const [attractions, setAttractions] = useState<any[]>([]);

  useEffect(() => {
    if ( !info.lon || !info.lat) return;
    getData({
      route: "attractions",
      data: getCoordinates(info),
      headers: { accept: "application/json" },
    })
      .then((body) => {
        console.log(body);
        setAttractions(body?.features);
      })
      .catch((err) => console.log(err));
  }, [info.lon, info.lat]);

  return attractions;
};

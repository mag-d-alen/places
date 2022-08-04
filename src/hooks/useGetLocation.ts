import { useEffect, useState } from "react";
import { getCoordinates } from "./getCoordinates";

import { getData } from "./getData";
import { useGetInfo } from "./useGetInfo";

export const useGetLocation = (infoType: boolean) => {
  const [location, setLocation] = useState<any[]>([]);
  const info = useGetInfo();

  useEffect(() => {
    if (infoType || !info.lon || !info.lat) return;
    getData({
      route: "location",
      data: getCoordinates(info),
      headers: { accept: "application/json" },
    })
      .then((body) => {
        console.log(body);
        setLocation(body?.features);
      })
      .catch((err) => console.log(err));
  }, [info.lon, info.lat, infoType]);

  return location;
};

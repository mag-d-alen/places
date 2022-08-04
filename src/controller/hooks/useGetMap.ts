import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../../data";

import { getData } from "../../functions/getData";

export const useGetMap = () => {
  const infoType = useSelector((s: any) => s.info.infoType);
  const [map, setMap] = useState<any[]>([]);

  useEffect(() => {
    if (infoType != options[2]) return;
    getData({
      route: "map",
    })
      .then((body) => {
        console.log(body);
        setMap(body);
      })
      .catch((err) => console.log(err));
  }, [infoType]);

  return map;
};

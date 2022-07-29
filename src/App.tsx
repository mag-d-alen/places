import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/homePage/Home";
import { MainContext } from "./context/MainContext";
import { uri } from "./data";

const App = () => {
  const [location, setLocation] = useState("");
  const [feature, setFeature] = useState("");
  const [infoType, setInfoType] = useState("weather");
  const [info, setInfo] = useState({
    xid: "",
    name: "",
    country: "",
    lat: 0,
    lon: 0,
    population: 0,
    timezone: "",
    status: "",
  });
  const [detailedInfo, setDetailedInfo] = useState<any>({});
  const [attractions, setAttractions] = useState<any>([]);

  const getData = async (params: any) => {
    if (!location) return;
    const res = await fetch(`${uri}/${params.route}/${params.data}`);
    if (res.status !== 200) {
      throw Error("problem getting data");
    }
    const body = await res.json();
    return body;
  };

  useEffect(() => {
    getData({ route: "place", data: location })
      .then((body) => setInfo(body))
      .catch((err) => console.log(err));
  }, [location]);


  const getAttractions = () => {
    getData({
      route: "attractions",
      data: `${info.lon - 0.5}&${info.lon + 0.5}&${info.lat - 0.5}&${
        info.lat + 0.5
      }`,
      headers: { accept: "application/json" },
    })
      .then((body) => {
        setAttractions(body?.features);
      })
      .catch((err) => console.log(err));
  };

  const getDetailedInfo = (id: string) => {
    getData({
      route: "details",
      data: id,
    })
      .then((body) => {
        setDetailedInfo(body);
      })
      .catch((err) => console.log(err));
  };


  return (
    <MainContext.Provider
      value={{
        location,
        setLocation,
        feature,
        setFeature,
        infoType,
        setInfoType,
        info,
        attractions,
        getAttractions,
        setAttractions,
        setDetailedInfo,
        detailedInfo,
        getDetailedInfo,
      }}>
      <Home />
    </MainContext.Provider>
  );
};
export default App;

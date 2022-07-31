import { useState } from "react";
import "./App.css";
import { Home } from "./components/homePage/Home";
import { MainContext } from "./context/MainContext";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { InfoType } from "./types";
import { useGetInfo } from "./hooks/useGetInfo";

const App = () => {
  const [location, setLocation] = useState("");
  const [feature, setFeature] = useState("");
  const [infoType, setInfoType] = useState("weather");
  const info = useGetInfo();

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
      }}>
      <Home />
    </MainContext.Provider>
  );
};
export default App;

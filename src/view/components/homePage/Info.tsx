import { useSelector } from "react-redux";
import { AttractionCards } from "../attractions/AttractionCards";
import { options } from "../../../data";
import { WeatherDisplay } from "../weather/WeatherDisplay";
import { InfoContainer } from "./homePage.styled";
import { Map } from "../map/Map";

export const Info: React.FC = () => {
  const { attractions, weather, map, infoType } = useSelector(
    (s: any) => s.info
  );
  return (
    <InfoContainer>
      {infoType === options[1] && weather ? <WeatherDisplay /> : null}
      {infoType === options[2] && attractions ? <AttractionCards /> : null}
      {infoType === options[3] && map ? <Map /> : null}
    </InfoContainer>
  );
};

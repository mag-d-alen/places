import { AttractionCard } from "./AttractionCard";
import { AttractionCardsContainer } from "./homePage.styled";
import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import { RootState } from "../../../model/context/store";

export const AttractionCards: React.FC = () => {
  const attractions = useSelector((s: RootState) => s.info.attractions);
  return (
    <AttractionCardsContainer>
      {attractions
        ? attractions?.map((a: any) => (
            <AttractionCard key={a.id} attraction={a.properties} />
          ))
        : <LinearProgress/>}
    </AttractionCardsContainer>
  );
};

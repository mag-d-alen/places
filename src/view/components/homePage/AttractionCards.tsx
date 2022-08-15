import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
import { RootState } from "../../../model/context/store";
import { AttractionsList } from "./AttractionsList";

export const AttractionCards: React.FC = () => {
  const { attractions, filteredAttractions } = useSelector(
    (s: RootState) => s.info
  );
  return filteredAttractions.length ? (
    <AttractionsList attractions={filteredAttractions} />
  ) : (
    <AttractionsList attractions={attractions} />
  );
};

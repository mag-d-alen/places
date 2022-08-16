import { useSelector } from "react-redux";
import { RootState } from "../../../model/context/store";
import { AttractionsList } from "./AttractionsList";

export const AttractionCards: React.FC = () => {
  const { filteredAttractions } = useSelector(
    (s: RootState) => s.info
  );

  return <AttractionsList attractions={filteredAttractions} />;
};

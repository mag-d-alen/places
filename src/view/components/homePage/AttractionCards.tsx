import { AttractionCard } from "./AttractionCard";
import { AttractionCardsContainer } from "./homePage.styled";
import { useSelector } from "react-redux";

export const AttractionCards: React.FC = () => {
  const attractions = useSelector((s: any) => s.info.attractions);
  return (
    <AttractionCardsContainer>
      {attractions
        ? attractions?.map((a: any) => (
            <AttractionCard key={a.id} attraction={a.properties} />
          ))
        : null}
    </AttractionCardsContainer>
  );
};

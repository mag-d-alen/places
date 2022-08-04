import { capitalizeName } from "../../../functions/capitalizeName";
import { Header } from "./Header";
import { HomeContainer, SelectionsContainer } from "./homePage.styled";
import { Search } from "./Search";
import { Select } from "./Select";
import { useSelector } from "react-redux";
import { BasicInfo } from "./BasicInfo";
import { Info } from "./Info";

export const Home: React.FC = () => {
  const { place,  basicInfo } = useSelector(
    (s: any) => s.info
  );

  return (
    <HomeContainer>
      <Header />
      <SelectionsContainer>
        <Search />
        {place ? <h1>{capitalizeName(place)}</h1> : null}
        {basicInfo.country ? (
          <>
            <BasicInfo basicInfo={basicInfo} />
            <Select />
          </>
        ) : null}
        <Info />
      </SelectionsContainer>
    </HomeContainer>
  );
};

import { useSelector } from "react-redux";
import { capitalizeName } from "../../../functions/capitalizeName";
import { setPronoun } from "../../../functions/setPronoun";
import { HeaderContainer, HeaderFirstLine } from "./homePage.styled";

export const Header: React.FC = () => {
  const infoType = useSelector((s: any) => s.info.infoType);
  const place = useSelector((s: any) => s.info.place);
  return (
    <HeaderContainer>
      <HeaderFirstLine>
        Welcome
        {place ? ` to ${capitalizeName(place)}!` : "!"}
      </HeaderFirstLine>
      <br />
      {!place
        ? "Choose the place you want to explore"
        : infoType
        ? infoType
        : "Choose what interests you"}
      {place ? (
        <>{setPronoun({ place, infoType })} {place.toLocaleUpperCase()}
        </>
      ) : null}
    </HeaderContainer>
  );
};

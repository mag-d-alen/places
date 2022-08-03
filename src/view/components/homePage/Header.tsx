import { useSelector } from "react-redux";
import { capitalizeName } from "../../../functions/capitalizeName";
import { setPronoun } from "../../../functions/setPronoun";
import { HeaderContainer } from "./homePage.styled";

export const Header: React.FC = () => {
  const infoType = useSelector((s: any) => s.info.infoType);
  const place = useSelector((s: any) => s.info.place);
  return (
    <HeaderContainer>
      Welcome
      {place ? ` to ${capitalizeName(place)}!` : "!"}
      <br />
      {infoType ? infoType: null}
      {place ? (
        <>
          {setPronoun({ place, infoType })} {place.toLocaleUpperCase()}
        </>
      ) : null}
    </HeaderContainer>
  );
};

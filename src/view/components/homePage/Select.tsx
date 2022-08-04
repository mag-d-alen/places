import { options } from "../../../data";
import { SelectDropdown } from "./homePage.styled";
import { useDispatch } from "react-redux";
import { setInfoType } from "../../../model/context/mainSlice";
import { useGetAttractions } from "../../../controller/hooks/useGetAttractions";

export const Select = () => {
  const dispatch = useDispatch();
  const displayInfoType = (infoType: string) => {
    dispatch(setInfoType(infoType));
  };
  useGetAttractions();
  
  return (
    <SelectDropdown onChange={(e) => displayInfoType(e.target.value)}>
      <option defaultValue="" disabled>
        Choose what you want to see
      </option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </SelectDropdown>
  );
};

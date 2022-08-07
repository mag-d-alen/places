import { options } from "../../../data";
import { SelectDropdown } from "./homePage.styled";
import { useDispatch } from "react-redux";
import { setInfoType } from "../../../model/context/mainSlice";

export const Select = () => {
  const dispatch = useDispatch();
  const displayInfoType = (infoType: string) => {
    dispatch(setInfoType(infoType));
  };

  return (
    <SelectDropdown onChange={(e) => displayInfoType(e.target.value)}>
      {options.map((option, i) => (
        <option defaultChecked={i === 0} key={i} value={option}>
          {option}
        </option>
      ))}
    </SelectDropdown>
  );
};

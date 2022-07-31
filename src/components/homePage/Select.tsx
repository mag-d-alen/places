import { options } from "../../data";
import { SelectDropdown } from "./homePage.styled";
import { useSelector, useDispatch } from "react-redux";
import { setAttractions } from "../../context/attractionsSlice";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export const Select = () => {
  const { info } = useContext(MainContext);
  const dispatch = useDispatch();
  const displayInfoType = (infoType: string) => {
    if (infoType !== options[1] || !info) return;
    dispatch(setAttractions(info));
  };
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

import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { options } from "../../data";
import { MainContextType } from "../../types";
import { SelectDropdown } from "./homePage.styled";

export const Select = () => {
  const { setInfoType, getAttractions } = useContext(
    MainContext
  ) as MainContextType;
  const displayInfoType = (info: string) => {
    setInfoType(info);
    info == options[1] && getAttractions();
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

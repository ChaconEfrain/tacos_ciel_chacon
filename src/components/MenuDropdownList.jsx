import { MENU } from "@/constants";
import React from "react";

const MenuDropdownList = ({ name, handleInputChange }) => {
  return (
    <li>
      <select name={name} className="w-full" onChange={handleInputChange}>
        <option value={null}>Seleccionar guiso</option>
        {MENU.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </li>
  );
};

export default MenuDropdownList;

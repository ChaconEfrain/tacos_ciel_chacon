import { MENU } from "@/constants";
import React from "react";

const MenuDropdownList = ({ name, handleInputChange }) => {
  return (
    <li>
      <select
        name={name}
        className="w-full focus:shadow-[0_0_0_2px_#ff7588]"
        onChange={handleInputChange}
      >
        <option value={false}>Seleccionar guiso</option>
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

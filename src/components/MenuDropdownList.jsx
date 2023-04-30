import { MENU } from "@/constants";
import React from "react";

const MenuDropdownList = ({ id }) => {
  return (
    <li>
      <select id={id} className="w-full">
        <option value={null}>Seleccionar guiso</option>
        {MENU.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </li>
  );
};

export default MenuDropdownList;

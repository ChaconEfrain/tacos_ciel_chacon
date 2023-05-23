import { MENU } from "@/constants";
import React from "react";

const MenuDropdownList = ({
  name,
  position,
  handleInputChange,
  selectedFlavors,
}) => {
  return (
    <li>
      <select
        name={name}
        className="w-full focus:shadow-[0_0_0_2px_#ff7588] py-2"
        data-position={position}
        onChange={handleInputChange}
      >
        <option value="default">Seleccionar guiso</option>
        {MENU.map((item) => (
          <option
            key={item}
            value={item}
            disabled={selectedFlavors.includes(item)}
          >
            {item}
          </option>
        ))}
      </select>
    </li>
  );
};

export default MenuDropdownList;

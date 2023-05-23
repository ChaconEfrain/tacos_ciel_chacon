import { MENU } from "@/constants";
import React, { useState } from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const [menuLength] = useState(MENU.length);
  return (
    <article className="sm:text-xl text-lg mb-6 flex flex-col gap-6">
      <p className="sm:text-3xl text-2xl text-center lg:text-start font-semibold">
        Puedes escoger de 4 a 6 guisos de nuestro delicioso menu
      </p>
      <MenuList menuLength={menuLength} />
    </article>
  );
};

export default Menu;

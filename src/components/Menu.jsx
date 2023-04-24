import { MENU } from "@/constants";
import React, { useState } from "react";
import MenuListDesktop from "./MenuListDesktop";

const Menu = () => {
  const [menuLength] = useState(MENU.length);
  return (
    <article className="grid grid-cols-3 justify-items-center text-xl gap-y-3">
      <p className="col-[1/-1] justify-self-start text-2xl">
        Puedes escoger hasta 4 guisos de nuestro delicioso menu
      </p>
      <MenuListDesktop menuLength={menuLength} />
    </article>
  );
};

export default Menu;
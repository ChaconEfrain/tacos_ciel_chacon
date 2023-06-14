import React, { useState } from "react";
import { COMPLEMENTS, MENU } from "@/constants";
import { Check } from "@/icons";

const Menu = () => {
  return (
    <article className="sm:text-xl text-lg mb-6 flex flex-col items-center gap-6">
      <p className="sm:text-3xl text-2xl text-center lg:text-start font-semibold self-start">
        Puedes escoger de 4 a 6 guisos de nuestro delicioso menu
      </p>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-24 gap-y-2">
        {MENU.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="sm:w-6 w-4 sm:h-6 h-4" /> {item}
          </li>
        ))}
      </ul>
      <footer className="flex flex-col gap-2 text-base sm:text-lg">
        <p>- Todos los paquetes incluyen lo siguiente:</p>
        <ul className="flex flex-wrap gap-2 italic">
          {COMPLEMENTS.map((complement, i, arr) => (
            <li key={complement}>{`${complement}${
              i !== arr.length - 1 ? "," : "."
            }`}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default Menu;

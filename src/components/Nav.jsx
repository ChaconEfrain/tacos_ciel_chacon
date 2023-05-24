import { NAV_MENU } from "@/constants";
import React from "react";

const Nav = () => {
  return (
    <header className="flex justify-between absolute top-0 w-full text-secondary-light py-8 px-14 font-bold tracking-wide">
      <img
        src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
        alt="Logo del negocio"
        className="w-32 h-32"
      />
      <nav>
        <ul className="flex gap-6 text-2xl">
          {NAV_MENU.map(({ label, pointsTo, icon }) => (
            <li key={label}>
              {pointsTo.includes("https") ? (
                <a href={pointsTo} target="_blank">
                  {icon}
                </a>
              ) : (
                <a href={pointsTo}>{label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

import { NAV_MENU } from "@/constants";
import { BurgerMenu, CloseButton } from "@/icons";
import React, { useState } from "react";

const Nav = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavMobile = () => setShowNavMobile(!showNavMobile);

  return (
    <>
      <header className="flex justify-between items-center absolute top-0 w-full text-secondary-light sm:py-8 sm:px-14 py-4 px-6 font-bold tracking-wide">
        <img
          src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
          alt="Logo del negocio"
          className="sm:w-32 w-28 sm:h-32 h-28 aspect-[402/401]"
        />
        <nav className="sm:block hidden text-white">
          <ul className="flex gap-4 text-2xl">
            {NAV_MENU.map(({ label, pointsTo, icon }) => (
              <li key={label}>
                {pointsTo.includes("https") ? (
                  <a href={pointsTo} target="_blank" title={label}>
                    {icon}
                  </a>
                ) : (
                  <a href={pointsTo}>{label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="block sm:hidden" onClick={handleNavMobile}>
          <BurgerMenu className="w-9 h-9" />
        </button>
        <nav
          className={`flex flex-col gap-6 sm:hidden fixed h-screen w-[60%] right-0 top-0 bottom-0 text-primary-dark ${
            !showNavMobile ? "translate-x-full" : "translate-x-0"
          } transition-all duration-300 bg-secondary-light p-8 z-30`}
        >
          <button
            className="ml-auto"
            onClick={handleNavMobile}
            title="Cerrar menú"
          >
            <CloseButton />
          </button>
          <ul className="flex flex-col gap-4 text-2xl">
            {NAV_MENU.map(({ label, pointsTo, icon }) => (
              <li key={label} onClick={handleNavMobile}>
                {pointsTo.includes("https") ? (
                  <a href={pointsTo} target="_blank" title={label}>
                    {icon}
                  </a>
                ) : (
                  <a href={pointsTo}>{label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`block sm:hidden fixed right-0 top-0 bottom-0 left-0 ${
            !showNavMobile ? "translate-x-full" : "translate-x-0"
          } transition-all duration-300 bg-primary-dark/80 z-20`}
          onClick={handleNavMobile}
        />
      </header>
    </>
  );
};

export default Nav;

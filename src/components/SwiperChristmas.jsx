import useSwiper from "@/hooks/useSwiper";
import { useRef } from "react";
import Package from "./Package";
import { PACKAGES, WINE_OPTIONS } from "@/constants";
import VeggieMenu from "./VeggieMenu";

export default function SwiperChristmas() {
  const swiperEl = useRef(null);
  const { handleNextSlide, handlePreviousSlide } = useSwiper(swiperEl);
  return (
    <div>
      <header className="mb-6 flex flex-col gap-4">
        <h3 className="text-secondary-dark sm:text-4xl text-3xl font-bold tracking-tight">
          Paquetes navideños con servicio incluído
        </h3>
        <div className="text-base sm:text-lg">
          <p>- Incluye bidón y descorche, no incluye copas.</p>
          <p>
            - Todos los paquetes incluyen una botella de vino de su elección:
          </p>
          <ul className="flex flex-wrap gap-2 ml-4">
            {WINE_OPTIONS.map((wine) => (
              <li key={wine.name} className="flex gap-1 flex-wrap">
                <span className="font-bold">{wine.name}: </span>
                {wine.options.map((option, i, arr) => (
                  <p key={option} className="italic">
                    {`${option}${i !== arr.length - 1 ? "," : "."} `}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <p>* Botella extra tiene un costo de $500.00</p>
      </header>
      <div className="sm:flex hidden justify-center gap-4 px-6 mb-2">
        <button
          title="Anterior"
          className="bg-secondary-medium md:w-64 py-1 sm:w-64 rounded-full font-bold text-white text-2xl"
          onClick={handlePreviousSlide}
        >
          {/* &larr; */}
          Anterior
        </button>
        <button
          title="Siguiente"
          className="bg-secondary-medium md:w-64 py-1 sm:w-64 rounded-full font-bold text-white text-2xl"
          onClick={handleNextSlide}
        >
          {/* &rarr; */}
          Siguiente
        </button>
      </div>
      <swiper-container
        style={{
          "--swiper-pagination-color": "#b3525f",
          "--swiper-pagination-bottom": "0",
          height: "660px",
        }}
        ref={swiperEl}
      >
        <swiper-slide>
          <VeggieMenu />
        </swiper-slide>
        {PACKAGES.map(
          ({ title, groupSize, options }) =>
            Number(groupSize.split(" ")[0]) > 10 && (
              <swiper-slide key={title}>
                <Package
                  title={title}
                  groupSize={groupSize}
                  options={options}
                  forChristmas={true}
                />
              </swiper-slide>
            )
        )}
      </swiper-container>
    </div>
  );
}

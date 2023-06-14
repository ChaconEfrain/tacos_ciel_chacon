import { useRef } from "react";
import useSwiper from "@/hooks/useSwiper";
import Package from "./Package";
import { PACKAGES } from "@/constants";

const SwiperWithoutService = () => {
  const swiperEl = useRef(null);
  const { handleNextSlide, handlePreviousSlide } = useSwiper(swiperEl);
  return (
    <div>
      <header className="mb-6">
        <h3 className="text-secondary-dark sm:text-4xl text-3xl font-bold tracking-tight">
          Charolas para llevar
        </h3>
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
        {PACKAGES.map(({ title, groupSize, options }) => (
          <swiper-slide key={title}>
            <Package
              title={title}
              groupSize={groupSize}
              options={options}
              withService={false}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SwiperWithoutService;

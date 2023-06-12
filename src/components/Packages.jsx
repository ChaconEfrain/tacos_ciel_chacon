import useSwiper from "@/hooks/useSwiper";
import Container from "./Container";
import Package from "./Package";
import Menu from "./Menu";
import { PACKAGES } from "@/constants";

const Packages = () => {
  const { swiperEl, handleNextSlide, handlePreviousSlide } = useSwiper();

  return (
    <Container id="eventos">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary-dark sm:text-5xl text-4xl font-bold tracking-tight text-center mb-4">
          Elige un paquete para tu evento!
        </h2>
        <Menu />
        <div>
          <div className="sm:flex hidden justify-between px-6 mb-2">
            <button
              title="Anterior"
              className="bg-secondary-medium md:w-80 py-1 sm:w-64 rounded-full font-bold text-white text-2xl"
              onClick={handlePreviousSlide}
            >
              {/* &larr; */}
              Anterior
            </button>
            <button
              title="Siguiente"
              className="bg-secondary-medium md:w-80 py-1 sm:w-64 rounded-full font-bold text-white text-2xl"
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
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </Container>
  );
};

export default Packages;

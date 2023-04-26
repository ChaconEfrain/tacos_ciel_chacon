import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Container from "./Container";
import Package from "./Package";
import Menu from "./Menu";
import { PACKAGES } from "@/constants";

const Packages = () => {
  const swiperEl = useRef(null);

  const handleNextSlide = () => {
    swiperEl.current.swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    swiperEl.current.swiper.slidePrev();
  };

  useEffect(() => {
    register();
  }, []);

  return (
    <Container id="packages-section">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary-dark text-5xl font-bold tracking-tight text-center mb-4">
          Elige un paquete para tu evento!
        </h2>
        <Menu />
        <div className="flex items-center gap-4 relative">
          <button
            className="bg-secondary-medium w-12 h-12 absolute -left-16 rounded-full font-bold"
            onClick={handlePreviousSlide}
          >
            &larr;
          </button>
          <swiper-container
            ref={swiperEl}
            slides-per-view="3"
            space-between="16"
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
          <button
            className="bg-secondary-medium w-12 h-12 absolute -right-16 rounded-full font-bold"
            onClick={handleNextSlide}
          >
            &rarr;
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Packages;

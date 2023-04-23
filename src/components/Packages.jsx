import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Container from "./Container";
import { packages } from "@/constants";
import Package from "./Package";

const Packages = () => {
  const swiperEl = useRef();

  useEffect(() => {
    register();
  }, []);

  return (
    <Container>
      <h2 className="text-secondary-dark text-5xl font-bold tracking-tight">
        Elige un paquete para tu evento!
      </h2>
      <swiper-container
        ref={swiperEl}
        loop="true"
        slides-per-view="2"
        space-between="4"
      >
        {packages.map((combo) => (
          <swiper-slide key={combo.title}>
            <Package
              title={combo.title}
              groupSize={combo.groupSize}
              optionOne={combo.optionOne}
              optionTwo={combo.optionTwo}
              optionThree={combo.optionThree}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
};

export default Packages;

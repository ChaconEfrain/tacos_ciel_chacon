import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import Container from "./Container";
import Package from "./Package";
import Menu from "./Menu";
import { PACKAGES } from "@/constants";

const Packages = () => {
  useEffect(() => {
    register();
  }, []);

  return (
    <Container>
      <h2 className="text-secondary-dark text-5xl font-bold tracking-tight text-center my-5">
        Elige un paquete para tu evento!
      </h2>
      <Menu />
      <swiper-container slides-per-view="3" space-between="4">
        {PACKAGES.map(({ title, groupSize, options }) => (
          <swiper-slide key={title}>
            <Package title={title} groupSize={groupSize} options={options} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
};

export default Packages;

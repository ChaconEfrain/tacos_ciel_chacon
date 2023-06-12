import useSwiper from "@/hooks/useSwiper";
import Container from "./Container";
import Package from "./Package";
import Menu from "./Menu";
import { PACKAGES } from "@/constants";
import SwiperWithService from "./SwiperWithService";
import SwiperWithoutService from "./SwiperWithoutService";

const Packages = () => {
  return (
    <Container id="eventos">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary-dark sm:text-5xl text-4xl font-bold tracking-tight text-center mb-4">
          Elige un paquete para tu evento!
        </h2>
        <Menu />
        <SwiperWithService />
        <SwiperWithoutService />
      </div>
    </Container>
  );
};

export default Packages;

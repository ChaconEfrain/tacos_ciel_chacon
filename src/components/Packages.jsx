import Container from "./Container";
import Menu from "./Menu";
import SwiperWithService from "./SwiperWithService";
import SwiperWithoutService from "./SwiperWithoutService";
import SwiperChristmas from "./SwiperChristmas";

const Packages = () => {
  return (
    <Container id="eventos">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary-dark sm:text-5xl text-4xl font-bold tracking-tight text-center mb-4">
          Elige un paquete para tu evento!
        </h2>
        <Menu />
        <SwiperWithService />
        <SwiperChristmas />
        <SwiperWithoutService />
      </div>
    </Container>
  );
};

export default Packages;

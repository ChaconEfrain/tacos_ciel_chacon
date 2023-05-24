import { Location } from "@/icons";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/efrainchacon/image/upload/f_auto/g_auto/v1681867759/tacos_de_canasta_ciel_chacon/IMG_20230415_075445_1_h6vn8m.jpg)] bg-cover bg-no-repeat bg-bottom">
      <div className="h-screen bg-gradient-to-r from-gray-950/70 to-gray-950/70" />
      <Nav />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-secondary-medium -tracking-[0.5px]">
            La canasta yucateca
          </h1>
          <p className="text-secondary-light text-3xl">
            Bienvenid@ a los mejores tacos de canasta de Yucatán! tenemos punto
            de venta, promociones y una variedad de paquetes para tus eventos
            más importantes.
          </p>
        </header>
        <footer className="text-secondary-light text-3xl flex gap-6 justify-center">
          <a
            href="#eventos"
            className="bg-gradient-to-br from-secondary-medium to-secondary-dark rounded-full py-2 px-6 font-bold"
          >
            Cotizar evento
          </a>
          <a
            href="https://goo.gl/maps/19Wdgwe8HkbhESRWA"
            target="_blank"
            className="bg-transparent border-[2px] border-secondary-medium backdrop-blur-sm rounded-full py-2 px-6 font-bold text-secondary-dark flex gap-2 items-center"
          >
            <Location className="w-8 h-8" /> Ubicación
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Hero;

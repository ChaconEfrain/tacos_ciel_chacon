import { Location } from "@/icons";

const Hero = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/efrainchacon/image/upload/f_auto/g_auto/v1681867759/tacos_de_canasta_ciel_chacon/IMG_20230415_075445_1_h6vn8m.jpg)] bg-cover bg-no-repeat bg-bottom">
      <div className="h-screen bg-gradient-to-r from-primary-dark/60 to-primary-dark/70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[38rem] sm:w-[32rem] w-[85%] flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <h1 className="xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold text-secondary-medium -tracking-[0.5px]">
            La canasta yucateca
          </h1>
          <p className="text-white xl:text-3xl md:text-2xl sm:text-xl text-lg">
            Bienvenid@ a los mejores tacos de canasta de Yucatán! tenemos punto
            de venta, promociones y una variedad de paquetes para tus eventos
            más importantes.
          </p>
        </header>
        <footer className="text-white xl:text-3xl md:text-2xl sm:text-xl text-lg flex sm:flex-row flex-col gap-6 justify-center sm:[&>a]:w-1/2">
          <a
            href="#eventos"
            className="bg-gradient-to-br from-secondary-medium to-secondary-dark rounded-full py-2 px-6 font-bold flex justify-center items-center"
          >
            Cotizar evento
          </a>
          <a
            href="https://goo.gl/maps/19Wdgwe8HkbhESRWA"
            target="_blank"
            className="bg-white rounded-full py-2 px-6 font-bold text-primary-dark flex gap-2 items-center justify-center"
          >
            <Location className="w-8 h-8" /> Ubicación
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Hero;

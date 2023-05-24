/* eslint-disable @next/next/no-img-element */
import { PROMOTIONS } from "@/constants";
import Container from "./Container";
import Promotion from "./Promotion";

const Promotions = () => {
  return (
    <Container id="promociones">
      <div className="grid lg:grid-cols-[45fr_55fr] gap-x-4 gap-y-8 justify-items-center items-center">
        <h2 className="text-secondary-dark sm:text-5xl text-4xl font-bold tracking-tight col-span-full lg:justify-self-start">
          Conoce nuestras promociones!
        </h2>
        <div className="flex flex-col gap-10 lg:px-6 sm:w-[70%] lg:w-full">
          <div className="flex flex-col gap-10">
            {PROMOTIONS.map(
              ({ title, description, tacos, drinks, price, icon }) => (
                <Promotion
                  key={price}
                  title={title}
                  description={description}
                  tacos={tacos}
                  drinks={drinks}
                  price={price}
                  icon={icon}
                />
              )
            )}
          </div>
        </div>
        <figure className="xl:w-[85%] self-center justify-self-center hidden lg:block">
          <img
            className="rounded-3xl"
            src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/g_auto/v1681867756/tacos_de_canasta_ciel_chacon/FB_IMG_1666010222566_081550_1_enykze.jpg"
            alt="Tacos de canasta con salsa"
          />
        </figure>
      </div>
    </Container>
  );
};

export default Promotions;

/* eslint-disable @next/next/no-img-element */
import { PROMOTIONS } from "@/constants";
import Container from "./Container";
import Promotion from "./Promotion";

const Promotions = () => {
  return (
    <Container>
      <div className="grid grid-cols-[45fr_55fr] gap-4 justify-items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-secondary-dark text-5xl font-bold tracking-tight">
            Conoce nuestras promociones!
          </h2>
          <div className="self-center flex flex-col gap-10">
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
        <figure className="w-[85%] self-center">
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

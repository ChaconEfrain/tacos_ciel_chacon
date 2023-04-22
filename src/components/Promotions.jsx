/* eslint-disable @next/next/no-img-element */
import { promotions } from "@/constants";
import Container from "./Container";
import Promotion from "./Promotion";

const Promotions = () => {
  return (
    <Container>
      <div className="grid grid-cols-[55fr_45fr] gap-4">
        <div>
          <h2>Promociones</h2>
          {promotions.map(
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
        <figure>
          <img
            src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/g_auto/v1681867756/tacos_de_canasta_ciel_chacon/FB_IMG_1666010222566_081550_1_enykze.jpg"
            alt="Tacos de canasta con salsa"
          />
        </figure>
      </div>
    </Container>
  );
};

export default Promotions;

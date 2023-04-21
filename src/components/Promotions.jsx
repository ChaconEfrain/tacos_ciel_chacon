import { promotions } from "@/constants";
import Container from "./Container";
import Promotion from "./Promotion";

const Promotions = () => {
  return (
    <Container>
      <div>
        <h2>Promociones</h2>
        {promotions.map(({ title, tacos, drinks, price }) => (
          <Promotion
            key={price}
            title={title}
            tacos={tacos}
            drinks={drinks}
            price={price}
          />
        ))}
      </div>
    </Container>
  );
};

export default Promotions;

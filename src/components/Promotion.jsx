import { Money, Soda, Taco } from "@/icons";

const Promotion = ({ title, description, tacos, drinks, price, icon }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="bg-secondary-medium/50 rounded-full w-12 h-12 flex items-center justify-center shadow">
          <span className="w-6 h-6">{icon}</span>
        </span>
        <p className="font-bold text-2xl uppercase text-primary-dark/90">
          {title}
        </p>
      </div>
      <p className="text-xl">{description}</p>
      <div className="text-xl flex flex-col gap-2">
        <span>Incluye:</span>
        <ul className="flex flex-col gap-3 ml-4">
          <li className="flex items-center gap-4">
            <Taco className="w-8 h-8" />
            {tacos}
          </li>
          <li className="flex items-center gap-4">
            <Soda className="w-8 h-8" />
            {drinks}
          </li>
          <li className="flex items-center gap-4">
            <Money className="w-8 h-8" />
            {price}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Promotion;

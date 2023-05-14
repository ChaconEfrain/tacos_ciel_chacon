import { Money, Soda, Taco } from "@/icons";

const Promotion = ({ title, description, tacos, drinks, price, icon }) => {
  return (
    <article className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <span className="bg-secondary-medium/50 rounded-full w-12 h-12 flex items-center justify-center shadow">
          <span className="w-6 h-6">{icon}</span>
        </span>
        <div className="flex gap-6 items-center">
          <p className="font-bold sm:text-2xl text-xl uppercase text-primary-dark/90">
            {title}
          </p>
          <strong className="sm:text-6xl text-5xl text-secondary-dark sm:hidden inline-block">
            {price}
          </strong>
        </div>
      </header>
      <p className="sm:text-xl text-lg mb-3">{description}</p>
      <div className="sm:text-xl text-lg flex flex-col gap-2">
        <span>Incluye:</span>
        <div className="flex items-center lg:gap-24 sm:gap-32 gap-16">
          <ul className="flex flex-col gap-3 ml-4">
            <li className="flex items-center gap-4">
              <Taco className="w-8 h-8" />
              {tacos}
            </li>
            <li className="flex items-center gap-4">
              <Soda className="w-8 h-8" />
              {drinks}
            </li>
          </ul>
          <strong className="sm:text-6xl text-5xl text-secondary-dark sm:inline-block hidden">
            {price}
          </strong>
        </div>
      </div>
    </article>
  );
};

export default Promotion;

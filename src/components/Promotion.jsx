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
        <div className="grid grid-cols-2 items-center">
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
          <div className="flex flex-col gap-2 items-center">
            <strong className="sm:text-6xl text-5xl text-secondary-dark sm:inline-block hidden">
              {price}
            </strong>
            <a
              href={`https://api.whatsapp.com/send?phone=529992787091&text=Hola! quisiera la promoción *${title}* por favor 😋`}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-secondary-medium to-secondary-dark font-bold rounded-full py-2 sm:px-16 px-4 text-white sm:text-2xl text-xl inline-block"
            >
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Promotion;

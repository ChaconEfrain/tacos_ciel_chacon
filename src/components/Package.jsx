import Link from "next/link";
import { Girl, Taco } from "@/icons";

const Package = ({ title, groupSize, options }) => {
  return (
    <article className="text-xl relative overflow-hidden flex flex-col gap-6 border-2 rounded-lg border-secondary-medium bg ">
      <header className="flex flex-col gap-4">
        <span className="self-start px-6 bg-secondary-medium font-bold text-2xl text-white">
          {groupSize}
        </span>
        <h3 className="text-center text-3xl font-semibold">{title}</h3>
      </header>
      <div className="flex flex-col p-6">
        {options.map(({ tacos, tacosForEach, price }, i) => (
          <section key={price} className="flex flex-col">
            <div className="flex items-center gap-6">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2">
                  <Taco className="w-6 h-6" /> {tacos}
                </li>
                <li className="flex gap-2">
                  <Girl className="w-6 h-6" /> {tacosForEach}
                </li>
              </ul>
              <strong className="text-5xl text-secondary-dark">{price}</strong>
            </div>
            <div
              className={`bg-primary-dark h-[3px] my-6 w-3/4 self-center ${
                i === options.length - 1 ? "hidden" : "block"
              }`}
            />
          </section>
        ))}
      </div>
      <footer className="flex justify-center">
        <Link
          href="/informacion-eventos"
          className="bg-secondary-medium font-bold rounded-full py-2 px-10 mb-6 text-white"
        >
          Solicitar paquete
        </Link>
      </footer>
    </article>
  );
};

export default Package;

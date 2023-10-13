import { VEGGIE_OPTIONS } from "@/constants";
import { Check } from "@/icons";

export default function VeggieMenu() {
  return (
    <article className="text-xl flex flex-col gap-6 border-2 rounded-lg border-secondary-medium px-6 py-12 h-[606px] sm:h-[630px]">
      <h3 className="text-3xl font-semibold w-fit mx-auto">Menú vegetariano</h3>
      <ul className="flex flex-col gap-8">
        {VEGGIE_OPTIONS.map((option) => (
          <li key={option} className="flex gap-2">
            <Check className="sm:w-6 w-4 sm:h-6 h-4" /> {option}
          </li>
        ))}
      </ul>
    </article>
  );
}

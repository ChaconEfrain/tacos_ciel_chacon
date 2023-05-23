import { MENU } from "@/constants";
import { Check } from "@/icons";

const MenuColumn = ({ firstIndex, secondIndex }) => {
  return (
    <ul className="flex flex-col gap-2">
      {MENU.slice(firstIndex, secondIndex).map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check className="sm:w-6 w-4 sm:h-6 h-4" /> {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuColumn;

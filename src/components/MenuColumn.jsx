import { MENU } from "@/constants";
import { Check } from "@/icons";

const MenuColumn = ({ firstIndex, secondIndex }) => {
  return (
    <ul className="flex flex-col gap-2">
      {MENU.slice(firstIndex, secondIndex).map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check className="w-6 h-6" /> {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuColumn;

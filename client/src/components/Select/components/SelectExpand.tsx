import { ReactNode } from "react";
import { useSelectContext } from "../SelectContext";

interface SelectExpandProps {
  children: ReactNode;
}

const SelectExpand: React.FC<SelectExpandProps> = ({ children }) => {
  const { isOpen, expand } = useSelectContext();
  return (
    <div className={`select__container ${isOpen ? "flex" : "hidden"}`}>
      <div className={`select__container--expand ${expand ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};
export default SelectExpand;

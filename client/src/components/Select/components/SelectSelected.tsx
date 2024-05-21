import { ReactNode } from "react";
import { Icon } from "@components";
import { useSelectContext } from "../SelectContext";

interface SelectSelectedProps {
  children: ReactNode;
}

const SelectSelected: React.FC<SelectSelectedProps> = ({ children }) => {
  const { isOpen, handleIsOpen } = useSelectContext();
  return (
    <div
      className={`select__selected ${isOpen ? "focus" : ""}`}
      onClick={handleIsOpen}
    >
      <p>{children}</p>
      <Icon name="sort" />
    </div>
  );
};

export default SelectSelected;

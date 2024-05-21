import { ReactNode } from "react";
import { useSelectContext } from "../SelectContext";

interface SelectItemProps {
  children: ReactNode;
  close?: boolean;
}

const SelectItem: React.FC<SelectItemProps> = ({ children, close = true }) => {
  const { closeSelect } = useSelectContext();

  const handleCloseSelect = () => {
    if (close) {
      closeSelect();
    }
  };

  return (
    <div className="select__item" onClick={handleCloseSelect}>
      {children}
    </div>
  );
};

export default SelectItem;

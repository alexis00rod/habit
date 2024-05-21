import { createContext, useContext } from "react";

interface SelectContextTypes {
  isOpen: boolean;
  handleIsOpen: () => void;
  expand: boolean;
  closeSelect: () => void;
}

const SelectContext = createContext<SelectContextTypes | null>(null);
export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error al renderizar componente select");
  }
  return context;
};
export default SelectContext;

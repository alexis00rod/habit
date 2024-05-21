import { SetStateAction, createContext, useContext } from "react";
import { DropdownPositions } from "./Dropdown";

interface DropdownContextTypes {
  isOpen: boolean;
  expand: boolean;
  position: DropdownPositions;
  setPosition: React.Dispatch<SetStateAction<DropdownPositions>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const DropdownContext = createContext<DropdownContextTypes | null>(null);
export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Error al renderizar componente Dropdown");
  }
  return context;
};
export default DropdownContext;

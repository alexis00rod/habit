import { createContext, useContext } from "react";

interface ModalContextType {
  handleIsOpen: () => void;
  closeModal: () => void;
  isOpen: boolean;
  expand: boolean;
}

const ModalContext = createContext<ModalContextType | null>(null);
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Error al renderizar componente modal");
  }
  return context;
};
export default ModalContext;

import { ReactNode } from "react";
import { useModalContext } from "../ModalContext";
import { createPortal } from "react-dom";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const { isOpen, handleIsOpen, expand } = useModalContext();
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className={`modal ${isOpen ? "flex" : "hidden"}`}
      onClick={handleIsOpen}
    >
      <div
        className={`modal__container ${expand ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalContainer;

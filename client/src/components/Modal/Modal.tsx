import { ReactNode, useState } from "react";
import { ModalContainer, ModalOpen } from "./components";
import ModalContext from "./ModalContext";
import ModalClose from "./components/ModalClose";

interface ModalProps {
  children: ReactNode;
}
interface ModalComponent extends React.FC<ModalProps> {
  Open: typeof ModalOpen;
  Close: typeof ModalClose;
  Container: typeof ModalContainer;
}

const Modal: ModalComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

  const handleIsOpen = () => {
    setExpand((prev) => !prev);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  };

  const closeModal = () => {
    setExpand(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleIsOpen, expand, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Open = ModalOpen;
Modal.Container = ModalContainer;
Modal.Close = ModalClose;

export default Modal;

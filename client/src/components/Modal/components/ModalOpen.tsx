import { ReactNode } from "react";
import { useModalContext } from "../ModalContext";

interface ModalOpenProps {
  children: ReactNode;
  className?: string;
}

const ModalOpen: React.FC<ModalOpenProps> = ({ children, className }) => {
  const { handleIsOpen } = useModalContext();
  return (
    <div className={`${className ? className : ""}`} onClick={handleIsOpen}>
      {children}
    </div>
  );
};

export default ModalOpen;

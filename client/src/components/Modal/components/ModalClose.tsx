import { ReactNode } from "react";
import { useModalContext } from "../ModalContext";
import Button from "@components/Buttons/Button";

interface ModalCloseProps {
  children: ReactNode;
  onClick: () => void;
  variant: string;
  color: string;
  disabled?: boolean;
}

const ModalClose: React.FC<ModalCloseProps> = ({
  children,
  onClick,
  variant,
  color,
  disabled,
}) => {
  const { closeModal } = useModalContext();
  const handleCloseModal = () => {
    onClick();
    closeModal();
  };
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleCloseModal}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ModalClose;

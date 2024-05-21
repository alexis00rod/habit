import { ReactNode } from "react";

interface InputDateLabelProps {
  children: ReactNode;
}

const InputDateLabel: React.FC<InputDateLabelProps> = ({ children }) => {
  return <span className="inputDate__label">{children}</span>;
};

export default InputDateLabel;

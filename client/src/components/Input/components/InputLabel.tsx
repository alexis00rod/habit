import { ReactNode } from "react";
import { useInputContext } from "../InputContext";

interface InputLabelProps {
  children: ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({ children }) => {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} className="input__label">
      {children}
    </label>
  );
};

export default InputLabel;

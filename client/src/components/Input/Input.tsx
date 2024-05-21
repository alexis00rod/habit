import { ReactNode } from "react";
import InputContext from "./InputContext";
import { InputField, InputLabel } from "./components";

interface InputProps {
  children: ReactNode;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
  margin?: string;
}

interface InputComponent extends React.FC<InputProps> {
  Label: typeof InputLabel;
  Field: typeof InputField;
}

const Input: InputComponent = ({
  children,
  name,
  id,
  value,
  onChange,
  autoFocus = false,
  margin,
}) => {
  return (
    <InputContext.Provider value={{ autoFocus, name, value, id, onChange }}>
      <div className={`input ${margin ? margin : "mb--8"}`}>{children}</div>
    </InputContext.Provider>
  );
};

Input.Label = InputLabel;
Input.Field = InputField;

export default Input;

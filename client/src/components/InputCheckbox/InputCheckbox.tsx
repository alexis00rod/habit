import { ReactNode } from "react";
import { Icon } from "@components";

interface InputCheckboxProps {
  children: ReactNode;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  children,
  id,
  name,
  onChange,
  checked,
}) => {
  return (
    <label htmlFor={id} className="inputCheckbox">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <div className="inputCheckbox__checkmark">
        <Icon name="check" />
      </div>
      <span>{children}</span>
    </label>
  );
};

export default InputCheckbox;

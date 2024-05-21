import { ReactNode } from "react";
import { Icon } from "@components";

interface InputRadioProps {
  children: ReactNode;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkmark?: boolean;
}

const InputRadio: React.FC<InputRadioProps> = ({
  children,
  name,
  id,
  value,
  onChange,
  checkmark = false,
}) => {
  return (
    <div className="inputRadio">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      {checkmark && (
        <div className="inputRadio__checkmark">
          <Icon name="check" />
        </div>
      )}
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default InputRadio;

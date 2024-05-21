import { useEffect, useRef } from "react";
import { useInputContext } from "../InputContext";

interface InputFieldProps {}

const InputField: React.FC<InputFieldProps> = () => {
  const { autoFocus, name, value, id, onChange } = useInputContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus, inputRef]);

  return (
    <input
      type="text"
      ref={inputRef}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="input__handle"
    />
  );
};

export default InputField;

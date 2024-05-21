import { ReactNode } from "react";

interface SelectLabelProps {
  children: ReactNode;
}

const SelectLabel: React.FC<SelectLabelProps> = ({ children }) => {
  return <div className="select__label">{children}</div>;
};

export default SelectLabel;

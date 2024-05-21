import { ReactNode, useEffect, useRef, useState } from "react";
import {
  SelectExpand,
  SelectItem,
  SelectLabel,
  SelectSelected,
} from "./components";
import SelectContext from "./SelectContext";

interface SelectProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
}

interface SelectComponent extends React.FC<SelectProps> {
  Label: typeof SelectLabel;
  Selected: typeof SelectSelected;
  Expand: typeof SelectExpand;
  Item: typeof SelectItem;
}

const Select: SelectComponent = ({ children, size }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setExpand(false);
        setTimeout(() => {
          setIsOpen(false);
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleIsOpen = () => {
    setExpand((prev) => !prev);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  };
  const closeSelect = () => {
    setExpand(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <SelectContext.Provider
      value={{ isOpen, handleIsOpen, expand, closeSelect }}
    >
      <div className={`select ${size ? size : "large"}`} ref={selectRef}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

Select.Label = SelectLabel;
Select.Selected = SelectSelected;
Select.Expand = SelectExpand;
Select.Item = SelectItem;

export default Select;

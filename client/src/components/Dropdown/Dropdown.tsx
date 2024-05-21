import { ReactNode, useRef, useState } from "react";
import { DropdownExpand } from "./components";
import DropdownContext from "./DropdownContext";

export interface DropdownPositions {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface DropdownProps {
  children: ReactNode;
  position?: DropdownPositions;
}

interface DropdownComponent extends React.FC<DropdownProps> {
  Expand: typeof DropdownExpand;
}

const Dropdown: DropdownComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [position, setPosition] = useState<DropdownPositions>({
    top: 0,
    right: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setExpand(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    setExpand(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <DropdownContext.Provider
      value={{ isOpen, expand, position, setPosition, dropdownRef }}
    >
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Expand = DropdownExpand;

export default Dropdown;

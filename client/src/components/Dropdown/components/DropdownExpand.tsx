import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDropdownContext } from "../DropdownContext";

interface DropdownExpandProps {
  children: ReactNode;
}

const DropdownExpand: React.FC<DropdownExpandProps> = ({ children }) => {
  const { isOpen, expand, position, setPosition, dropdownRef } =
    useDropdownContext();
  const dropdownRoot = document.getElementById("dropdown-root");

  useEffect(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setPosition({ top: rect.top, left: rect.left + rect.width});
    }
  }, [isOpen, dropdownRef, setPosition]);

  if (!dropdownRoot) {
    return null;
  }

  return createPortal(
    <div
      className={`dropdown__container ${isOpen ? "flex" : "hidden"}`}
      style={{ top: position.top, left: position.left }}
    >
      <div className={`dropdown__container--expand ${expand ? "open" : ""}`}>
        {children}
      </div>
    </div>,
    dropdownRoot
  );
};

export default DropdownExpand;

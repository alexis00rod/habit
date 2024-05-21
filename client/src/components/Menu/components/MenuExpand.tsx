import { ReactNode } from "react";
import { useMenuContext } from "../MenuContext";

interface MenuExpandProps {
  children: ReactNode;
  position?: string;
}

const MenuExpand: React.FC<MenuExpandProps> = ({ children, position }) => {
  const { isOpen, expand } = useMenuContext();

  return (
    <div
      className={`menu__container ${position ? position : "left"} ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className={`menu__container--expand ${expand ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default MenuExpand;

import { ReactNode } from "react";
import { useMenuContext } from "../MenuContext";

interface MenuOpenProps {
  children: ReactNode;
  className?: string;
}

const MenuOpen: React.FC<MenuOpenProps> = ({ children, className }) => {
  const { handleIsOpen } = useMenuContext();
  return (
    <div onClick={handleIsOpen} className={className}>
      {children}
    </div>
  );
};

export default MenuOpen;

import { ReactNode } from "react";
import { useMenuContext } from "../MenuContext";
import { Link } from "react-router-dom";

interface MenuItemProps {
  children: ReactNode;
  href?: string;
  close?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  close = true,
}) => {
  const { closeMenu } = useMenuContext();

  const handleCloseMenu = () => {
    if (close) {
      closeMenu();
    }
  };

  if (href) {
    return (
      <Link to={href} className="menu__item" onClick={closeMenu}>
        {children}
      </Link>
    );
  }
  return (
    <button className="menu__item" onClick={handleCloseMenu}>
      {children}
    </button>
  );
};

export default MenuItem;

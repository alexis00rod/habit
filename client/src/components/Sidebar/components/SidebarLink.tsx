import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@components";

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
  icon: string;
  className?: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  children,
  icon,
  className,
}) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `sidebar__link ${isActive ? "active" : ""} ${
          className ? className : ""
        }`
      }
    >
      <Icon name={icon} />
      {children}
    </NavLink>
  );
};

export default SidebarLink;

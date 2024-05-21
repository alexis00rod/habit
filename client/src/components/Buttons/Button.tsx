import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  variant: string;
  color: string;
  size?: string;
  href?: string;
  active?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size = "medium",
  href,
  active,
  onClick,
  disabled,
  children,
}) => {
  if (href) {
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          `btn btn--${variant} btn--${active && isActive ? active : color}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`btn btn--${variant} btn--${color} btn--${
        size ? size : "medium"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

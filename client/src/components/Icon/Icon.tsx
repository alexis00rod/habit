interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = false }) => {
  return (
    <i className={`fa-solid fa-${name} ${className ? className : ""}`}></i>
  );
};

export default Icon;

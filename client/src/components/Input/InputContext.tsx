import { createContext, useContext } from "react";

interface InputContextTypes {
  name: string;
  value: string;
  id: string;
  autoFocus: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContext = createContext<InputContextTypes | null>(null);
export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Error al renderizar componente input");
  }
  return context;
};
export default InputContext;

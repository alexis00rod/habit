import { createContext, useContext } from "react";
import { Dayjs } from "dayjs";

interface InputDateContextTypes {
  isOpen: boolean;
  handleIsOpen: () => void;
  expand: boolean;
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
}

const InputDateContext = createContext<InputDateContextTypes | null>(null);
export const useInputDateContext = () => {
  const context = useContext(InputDateContext);
  if (!context) {
    throw new Error("Error al renderizar componente Input Date");
  }
  return context;
};
export default InputDateContext;

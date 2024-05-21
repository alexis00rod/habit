import { ReactNode, useEffect, useRef, useState } from "react";
import { Icon } from "@components";
import InputDateContext from "./InputDateContext";
import { InputDateLabel, InputDatePicker } from "./components";
import dayjs, { Dayjs } from "dayjs";

interface InputDateProps {
  children?: ReactNode;
  date: Date;
  focus?: boolean;
}

interface InputDateComponent extends React.FC<InputDateProps> {
  Label: typeof InputDateLabel;
}

const InputDate: InputDateComponent = ({ children, date, focus = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(date));
  const inputDateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputDateRef.current &&
        !inputDateRef.current.contains(event.target as Node)
      ) {
        setExpand(false);
        setTimeout(() => {
          setIsOpen(false);
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputDateRef]);

  const handleIsOpen = () => {
    setExpand((prev) => !prev);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  };

  return (
    <InputDateContext.Provider
      value={{
        isOpen,
        handleIsOpen,
        expand,
        selectedDate,
        setSelectedDate,
      }}
    >
      <div className="inputDate" ref={inputDateRef}>
        {children}
        <div
          className={`inputDate__field ${isOpen && focus ? "focus" : ""}`}
          onClick={handleIsOpen}
        >
          <p>{selectedDate.format("LL")}</p>
          <Icon name="calendar" />
        </div>
        <InputDatePicker />
      </div>
    </InputDateContext.Provider>
  );
};

InputDate.Label = InputDateLabel;

export default InputDate;

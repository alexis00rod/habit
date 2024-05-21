import { useEffect, useState } from "react";
import { Button, Icon } from "@components";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useInputDateContext } from "../InputDateContext";
dayjs.extend(localizedFormat);
dayjs.locale("es");

const InputDatePicker = () => {
  const { isOpen, expand, selectedDate, setSelectedDate } =
    useInputDateContext();
  const [selectedMonth, setSelectedMonth] = useState<Dayjs>(dayjs());
  const [daysInMonth, setDaysInMonth] = useState<Dayjs[]>([]);

  useEffect(() => {
    const generateDaysInMonth = () => {
      const daysInMonth: Dayjs[] = [];

      const firstDayOfMonth = selectedMonth.startOf("month");
      const startDayOfWeek = firstDayOfMonth.day();

      const daysFromPrevMonth = startDayOfWeek === 0 ? 7 : startDayOfWeek;

      const lastDayOfPreviousMonth = selectedMonth
        .subtract(1, "month")
        .endOf("month");
      for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
        const day = lastDayOfPreviousMonth.subtract(i, "day");
        daysInMonth.push(day);
      }

      const totalDays = daysFromPrevMonth + selectedMonth.daysInMonth();
      const remainingDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

      for (let i = 0; i < selectedMonth.daysInMonth(); i++) {
        const day = firstDayOfMonth.add(i, "day");
        daysInMonth.push(day);
      }

      const firstDayOfNextMonth = selectedMonth
        .add(1, "month")
        .startOf("month");
      for (let i = 0; i < remainingDays; i++) {
        const day = firstDayOfNextMonth.add(i, "day");
        daysInMonth.push(day);
      }

      return daysInMonth;
    };

    setDaysInMonth(generateDaysInMonth());
  }, [selectedMonth]);

  const handleMonthChange = (direction: "prev" | "next") => {
    const newMonth =
      direction === "prev"
        ? selectedMonth.subtract(1, "month")
        : selectedMonth.add(1, "month");
    setSelectedMonth(newMonth);
  };

  const isOutsideMonth = (day: Dayjs) => {
    return !day.isSame(selectedMonth, "month");
  };

  return (
    <div className={`inputDate__picker ${isOpen ? "flex" : "hidden"}`}>
      <div className={`inputDate__picker--container ${expand ? "open" : ""}`}>
        <div className="inputDate__picker--month">
          <h5 className="grow">{selectedMonth.format("MMMM YYYY")}</h5>
          <Button
            variant="icon"
            size="small"
            color="secondary"
            onClick={() => handleMonthChange("prev")}
          >
            <Icon name="caret-left" />
          </Button>
          <Button
            variant="icon"
            size="small"
            color="secondary"
            onClick={() => handleMonthChange("next")}
          >
            <Icon name="caret-right" />
          </Button>
        </div>
        <div className="inputDate__picker--days">
          <span>Do</span>
          <span>Lu</span>
          <span>Ma</span>
          <span>Mi</span>
          <span>Ju</span>
          <span>Vi</span>
          <span>Sá</span>
          {daysInMonth.map((day, i) => (
            <Button
              key={i}
              variant="icon"
              color={
                day.isSame(selectedDate, "day") && !isOutsideMonth(day)
                  ? "primary"
                  : "secondary"
              }
              size="small"
              disabled={isOutsideMonth(day)}
              onClick={() => setSelectedDate(day)}
            >
              {day.format("D")}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputDatePicker;

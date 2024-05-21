import {
  Modal,
  Icon,
  Input,
  Select,
  InputRadio,
  InputCheckbox,
  InputDate,
} from "@components";
import { useState } from "react";

interface NewHabitTypes {
  nameHabit: string;
  times: "times" | "mins";
  frequency: "day" | "week" | "month";
  hourDay: string[];
}

const initialNewHabit: NewHabitTypes = {
  nameHabit: "",
  times: "times",
  frequency: "day",
  hourDay: ["morning", "afternoon", "evening"],
};

const NewHabit = () => {
  const [newHabit, setNewHabit] = useState<NewHabitTypes>(initialNewHabit);

  const handleNewHabit = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewHabit({
      ...newHabit,
      [name]: value,
    });
  };

  const handleNewHabitHourDay = ({
    target: { id, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (checked || (newHabit.hourDay.length > 1 && !checked)) {
      setNewHabit({
        ...newHabit,
        hourDay: checked
          ? [...(newHabit.hourDay || []), id]
          : newHabit.hourDay.filter((e) => e !== id),
      });
    }
  };

  const submitNewHabit = () => {
    console.log(newHabit);
  };

  const cancelNewHabit = () => {
    setNewHabit(initialNewHabit);
  };

  const times: { id: string; title: string }[] = [
    { id: "times", title: "Veces" },
    { id: "mins", title: "Minutos" },
  ];

  const frequencies: { id: string; title: string }[] = [
    { id: "day", title: "Por día" },
    { id: "week", title: "Por semana" },
    { id: "month", title: "Por mes" },
  ];

  const hoursDay: { id: string; title: string }[] = [
    { id: "morning", title: "Mañana" },
    { id: "afternoon", title: "Tarde" },
    { id: "evening", title: "Noche" },
  ];

  const renderHourDaySelected = () => {
    if (newHabit.hourDay.length === 3) {
      return "Cualquier hora";
    } else {
      const titles = newHabit.hourDay.map((hour) => {
        const selectedHour = hoursDay.find((e) => e.id === hour);
        return selectedHour ? selectedHour.title : "";
      });
      return titles.join(", ");
    }
  };

  return (
    <Modal>
      <Modal.Open className="menu__item">
        <Icon name="infinity" /> Nuevo hábito
      </Modal.Open>
      <Modal.Container>
        <div className="flex flex--col gap--4">
          <h4>Nuevo hábito</h4>
          <Input
            name="nameHabit"
            id="nameHabit"
            value={newHabit.nameHabit}
            onChange={handleNewHabit}
            margin="m--0"
            autoFocus
          >
            <Input.Label>Nombre</Input.Label>
            <Input.Field />
          </Input>
          <div className="flex align--end gap--4">
            {/* Veces */}
            <Select size="small">
              <Select.Label>Objetivo</Select.Label>
              <Select.Selected>
                {times.find((e) => e.id === newHabit.times)?.title}
              </Select.Selected>
              <Select.Expand>
                {times.map((e) => (
                  <Select.Item key={e.id}>
                    <InputRadio
                      name="times"
                      id={e.id}
                      value={e.id}
                      onChange={handleNewHabit}
                    >
                      {e.title}
                    </InputRadio>
                  </Select.Item>
                ))}
              </Select.Expand>
            </Select>
            {/* Frecuencia */}
            <Select size="small">
              <Select.Selected>
                {frequencies.find((e) => e.id === newHabit.frequency)?.title}
              </Select.Selected>
              <Select.Expand>
                {frequencies.map((e) => (
                  <Select.Item key={e.id}>
                    <InputRadio
                      name="frequency"
                      id={e.id}
                      value={e.id}
                      onChange={handleNewHabit}
                    >
                      {e.title}
                    </InputRadio>
                  </Select.Item>
                ))}
              </Select.Expand>
            </Select>
          </div>
          <div className="flex align--end gap--4">
            {/* Hora del dia */}
            <Select size="large">
              <Select.Label>Horas de día</Select.Label>
              <Select.Selected>{renderHourDaySelected()}</Select.Selected>
              <Select.Expand>
                {hoursDay.map((e) => (
                  <Select.Item key={e.id} close={false}>
                    <InputCheckbox
                      id={e.id}
                      name="hourDay"
                      onChange={handleNewHabitHourDay}
                      checked={newHabit.hourDay.includes(e.id)}
                    >
                      {e.title}
                    </InputCheckbox>
                  </Select.Item>
                ))}
              </Select.Expand>
            </Select>
            {/* Fecha de inicio */}
            <InputDate date={new Date()}>
              <InputDate.Label>Fecha de inicio</InputDate.Label>
            </InputDate>
          </div>
        </div>
        <div className="mt--4 flex justify--end gap--4">
          <Modal.Close
            variant="contained"
            color="secondary"
            onClick={cancelNewHabit}
          >
            Cancelar
          </Modal.Close>
          <Modal.Close
            variant="contained"
            color="primary"
            onClick={submitNewHabit}
            disabled={!newHabit.nameHabit}
          >
            Guardar
          </Modal.Close>
        </div>
      </Modal.Container>
    </Modal>
  );
};

export default NewHabit;

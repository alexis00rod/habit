import { Dropdown, Icon, InputRadio, Menu } from "@components";
import { useState } from "react";

const HabitsSort = () => {
  const [habitsSort, setHabitsSort] = useState<string>("hour");

  const handleHabitsSort = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setHabitsSort(value);
  };

  console.log(habitsSort);

  return (
    <Menu>
      <Menu.Open className="btn btn--contained btn--secondary btn--medium">
        <Icon name="arrow-up-short-wide" />
        Orden
        <Icon name="caret-down" />
      </Menu.Open>
      <Menu.Expand position="right">
        <Menu.Item close={false}>
          <InputRadio
            name="habitsSort"
            id="hour"
            value="hour"
            onChange={handleHabitsSort}
            checkmark
          >
            Hora de recordatorio
          </InputRadio>
        </Menu.Item>
        <Menu.Item close={false}>
          <InputRadio
            name="habitsSort"
            id="mySort"
            value="mySort"
            onChange={handleHabitsSort}
            checkmark
          >
            Mi orden
          </InputRadio>
        </Menu.Item>
        {/* Alfabético */}
        <Menu.Item close={false}>
          <Dropdown>
            Alfabético <Icon name="caret-right" />
            <Dropdown.Expand>
              {/* <InputRadio
                name="habitsSort"
                id="a-z"
                value="a-z"
                onChange={handleHabitsSort}
              >
                A-Z
              </InputRadio>
              <InputRadio
                name="habitsSort"
                id="z-a"
                value="z-a"
                onChange={handleHabitsSort}
              >
                Z-A
              </InputRadio> */}
              <div>A-Z</div>
              <div>Z-A</div>
            </Dropdown.Expand>
          </Dropdown>
          {/* <Dropdown /> */}
        </Menu.Item>
      </Menu.Expand>
    </Menu>
  );
};

export default HabitsSort;

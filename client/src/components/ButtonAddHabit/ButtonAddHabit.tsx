import { Menu, Icon } from "@components";
import { LogMood, NewHabit } from "./components";

const ButtonAddHabit: React.FC = () => {
  return (
    <Menu>
      <Menu.Open className="btn btn--contained btn--primary btn--medium">
        <Icon name="plus" />
        Agregar hábito
        <Icon name="caret-down" />
      </Menu.Open>
      <Menu.Expand position="right">
        <Menu.Item>
          <NewHabit />
        </Menu.Item>
        <Menu.Item>
          <LogMood />
        </Menu.Item>
      </Menu.Expand>
    </Menu>
  );
};

export default ButtonAddHabit;

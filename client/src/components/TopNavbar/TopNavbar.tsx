import { ButtonAddHabit, InputDate } from "@components";
import { HabitsSort } from "./components";

const TopNavbar: React.FC = () => {
  return (
    <div className="topNavbar">
      <h2>Bienvenido, Rodrigo!</h2>
      <InputDate focus={false} date={new Date()} />
      <HabitsSort />
      <ButtonAddHabit />
    </div>
  );
};

export default TopNavbar;

import {
  SidebarAreas,
  SidebarLink,
  SidebarSettings,
  SidebarUser,
} from "./components";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarUser />
      <SidebarLink href="/" icon="box-archive">
        Hábitos
      </SidebarLink>
      <SidebarAreas />
      <span className="sidebar__title">Preferencias</span>
      <SidebarLink href="/progreso" icon="chart-pie">
        Progreso
      </SidebarLink>
      <SidebarSettings />
      <div className="sidebar--rs"></div>
    </div>
  );
};

export default Sidebar;

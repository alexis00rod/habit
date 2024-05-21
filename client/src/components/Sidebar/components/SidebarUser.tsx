import { Menu } from "@components";
import profileImg from "@assets/defaultProfile.jpg";

const SidebarUser = () => {
  return (
    <div className="mb--4">
      <Menu>
        <Menu.Open className="sidebar__user">
          <img src={profileImg} alt="profileImg" />
          <h4>Rodrigo Ruiz Diaz</h4>
        </Menu.Open>
        <Menu.Expand>
          <Menu.Item href="/profile">Perfil</Menu.Item>
          <Menu.Item>Cerrar sesión</Menu.Item>
        </Menu.Expand>
      </Menu>
    </div>
  );
};

export default SidebarUser;

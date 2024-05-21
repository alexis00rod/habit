import { useState } from "react";
import { Icon, Modal } from "@components";
import { SidebarLink } from "./";

const SidebarSettings = () => {
  const [openSettings, setOpenSetting] = useState<boolean>(false);

  const handleOpenSettings = () => {
    setOpenSetting((prev) => !prev);
  };

  return (
    <>
      <SidebarLink href="/settings" icon="gear" className="mobile">
        Configuración
      </SidebarLink>
      {/* <button className="sidebar__link desktop" onClick={handleOpenSettings}>
        <Icon name="gear" /> Configuración
      </button>
      <Modal open={openSettings} handle={setOpenSetting}>
        Configuraciones
      </Modal> */}
    </>
  );
};

export default SidebarSettings;

import { SidebarLink, SidebarNewArea } from "./";

interface Areas {
  id: number;
  href: string;
  name: string;
}

const SidebarAreas = () => {
  const areas: Areas[] = [
    { id: 1, href: "/area/estudio", name: "estudio" },
    { id: 2, href: "/area/trabajo", name: "trabajo" },
  ];

  return (
    <div className="sidebar__areas">
      <span className="sidebar__title">Areas</span>
      {areas.map((e) => (
        <SidebarLink key={e.id} href={e.href} icon="folder">
          {e.name}
        </SidebarLink>
      ))}
      <SidebarNewArea />
    </div>
  );
};

export default SidebarAreas;

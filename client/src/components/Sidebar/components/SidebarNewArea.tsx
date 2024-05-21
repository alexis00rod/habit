import { useEffect, useRef, useState } from "react";
import { Icon, Input } from "@components";

const SidebarNewArea = () => {
  const [addNewArea, setAddNewArea] = useState<boolean>(false);
  const [newArea, setNewArea] = useState<string>("");
  const newAreaInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        newAreaInput.current &&
        !newAreaInput.current.contains(event.target as Node)
      ) {
        setNewArea("");
        setAddNewArea(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddNewArea = () => {
    setAddNewArea((prev) => !prev);
  };

  const handleNewArea = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewArea(value);
  };

  return addNewArea ? (
    <div className="sidebar__newArea" ref={newAreaInput}>
      <Icon name="folder" />
      <Input
        name="newArea"
        margin="m--0"
        id="newArea"
        value={newArea}
        onChange={handleNewArea}
        autoFocus
      >
        <Input.Field />
      </Input>
    </div>
  ) : (
    <button className="sidebar__link" onClick={handleAddNewArea}>
      <Icon name="plus" /> Nueva área
    </button>
  );
};

export default SidebarNewArea;

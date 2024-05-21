import { Modal, Icon } from "@components";

const LogMood = () => {
  return (
    <Modal>
      <Modal.Open className="menu__item">
        <Icon name="plus" />
        Registrar estado de ánimo
      </Modal.Open>
      <Modal.Container>Como te sientes hoy?</Modal.Container>
    </Modal>
  );
};

export default LogMood;

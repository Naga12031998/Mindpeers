import { ReactElement } from "react";
import Modal from "react-modal";
import "../App.css";

type Props = {
  isModalOpen: boolean;
  onRequestClose: Function;
  src: string;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
  },
};

const ReactModal = (props: Props): ReactElement => {
  const { isModalOpen, onRequestClose, src } = props;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={(): void => {
        onRequestClose();
      }}
      style={customStyles}
    >
      <img src={src} alt="pic" />
    </Modal>
  );
};

export default ReactModal;

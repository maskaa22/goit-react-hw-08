import Modal from "react-modal";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import s from "./ModalWindow.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ModalWindow({ modalIsOpen, setIsOpen, userId }) {
  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Do you want delete this contact?</h2>
      <div className={s.variant}>
        <FaCheck
          className={s.yes}
          onClick={() => {
            dispatch(deleteContact(userId));
            closeModal();
          }}
        />
        <MdOutlineCancel onClick={closeModal} className={s.no} />
      </div>
    </Modal>
  );
}

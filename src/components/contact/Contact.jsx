import { useDispatch, useSelector } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { MdDelete, MdEdit } from "react-icons/md";
import { editCurrentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { useState } from "react";

export default function Contact({
  contact: { name, number, id },
  openModal,
  setUserId,
}) {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);
  const [valueName, setValueName] = useState(null);
  const [valueNumber, setValueNumber] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSubmit = () => {
    dispatch(
      editContact({
        name: !valueName ? name : valueName,
        number: !valueNumber ? number : valueNumber,
        id,
      })
    );
    setIsEditing(!isEditing);
  };
  return (
    <div className={css.card}>
      <div>
        <div className={css.name}>
          <FaUser />
          {!isEditing ? (
            name
          ) : (
            <input
              defaultValue={currentContact.name}
              onChange={(e) => setValueName(e.target.value)}
              onBlur={handleEditSubmit}
            />
          )}
        </div>
        <div>
          <FaPhoneAlt />
          {!isEditing ? (
            number
          ) : (
            <input
              defaultValue={currentContact.number}
              onChange={(e) => setValueNumber(e.target.value)}
              onBlur={handleEditSubmit}
            />
          )}
        </div>
      </div>
      <div className={css.operations}>
        <MdDelete
          className={css.delete}
          onClick={() => {
            openModal();
            setUserId(id);
          }}
          // onClick={() => dispatch(deleteContact(id))}
        />
        <MdEdit
          className={css.edit}
          onClick={() => {
            dispatch(
              editCurrentContact({
                name: !valueName ? name : valueName,
                number: !valueNumber ? number : valueNumber,
                id,
              })
            );
            setIsEditing(!isEditing);
          }}
        />
      </div>
    </div>
  );
}

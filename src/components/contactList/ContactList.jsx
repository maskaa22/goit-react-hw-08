import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList({ openModal, setUserId }) {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      {filterContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          openModal={openModal}
          setUserId={setUserId}
        />
      ))}
    </div>
  );
}

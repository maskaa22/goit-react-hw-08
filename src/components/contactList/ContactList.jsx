import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const filterContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div className={css.list}>
      {filterContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

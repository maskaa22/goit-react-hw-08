import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import React, { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ModalWindow from "../../components/modalWindow/ModalWindow";

export const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userId, setUserId] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <>
      <h1 className="h1-title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <h2>Request in progress...</h2>}
      <ContactList openModal={openModal} setUserId={setUserId} />
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        userId={userId}
      />
    </>
  );
};

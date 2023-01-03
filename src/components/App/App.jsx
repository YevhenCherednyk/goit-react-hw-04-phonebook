import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';

const STORAGE_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    if (contacts.find(contact => contact.number === number)) {
      return alert(`${number} is already in contacts.`);
    }

    setContacts(contacts => [...contacts, newContact]);
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} contacts={contacts} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getFiltredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

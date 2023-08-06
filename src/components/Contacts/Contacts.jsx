import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


const Contacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <UserMenu />
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;

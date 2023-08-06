import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setContacts = createAction('contacts/setContacts');
// Define other contact actions here as needed

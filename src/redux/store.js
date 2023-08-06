import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducers';
import contactsReducer from './contacts/reducers';
import filterReducer from './filter/reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

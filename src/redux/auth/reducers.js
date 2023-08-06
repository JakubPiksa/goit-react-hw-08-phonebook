import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, logout, setUserInfo } from './actions';

const initialState = {
  isLoggedIn: false,

};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    })
    .addCase(logout, (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });

});

export default authReducer;

import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('auth/loginSuccess');
export const logout = createAction('auth/logout');
export const setUserInfo = createAction('auth/setUserInfo');


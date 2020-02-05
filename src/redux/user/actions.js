import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST } from './acion-types';

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

export const userLoginError = (payload) => ({
  type: USER_LOGIN_ERROR,
  payload,
});

export const userLoginRequest = () => ({ type: USER_LOGIN_REQUEST });

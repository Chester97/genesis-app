import { SET_USER_NAME, USER_DATA_SUCCEEDED, USER_DATA_FAILED } from './acion-types';

export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload,
});

export const updateUser = (payload) => ({
  type: USER_DATA_SUCCEEDED,
  payload,
});

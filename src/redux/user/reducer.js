import { initialState } from './initial-state';
import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from './acion-types';

export function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
        userData: null,
      };
    case 'USER_LOGOUT':
      return {
        error: null,
        loading: false,
        userData: null,
      };
    default:
      return state;
  }
}

import { initialState } from './initial-state';
import { SET_USER_NAME, USER_DATA_SUCCEEDED, USER_DATA_FAILED } from './acion-types';

export function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case USER_DATA_SUCCEEDED:
      return { ...state, state: action.payload };
    case USER_DATA_FAILED:
      return { ...state, state: action.payload };
    default:
      return state;
  }
}

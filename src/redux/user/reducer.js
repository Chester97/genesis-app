import { initialState } from './initial-state';
import { SET_USER_NAME } from './acion-types';

export function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

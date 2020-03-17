import { initialState } from './initial-state';
import {
  COMMENTS_ERROR,
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_REALTIME_PUSH,
} from './action-types';

export function comments(state = initialState, action) {
  switch (action.type) {
    case COMMENTS_SUCCESS:
      return {
        ...state,
        commentsData: action.payload,
      };
    case COMMENTS_REALTIME_PUSH:
      return {
        ...state,
        commentsData: [action.payload, ...state.commentsData],
      };
    case COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case COMMENTS_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
}

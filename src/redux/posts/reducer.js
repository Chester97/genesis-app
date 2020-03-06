import { initialState } from './initial-state';
import { POSTS_ERROR, POSTS_REQUEST, POSTS_SUCCESS } from './action-types';

export function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        postsData: null,
      };
    case POSTS_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

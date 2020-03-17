import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { posts } from './posts/reducer';
import { comments } from './comments/reducer';

export const rootReducer = combineReducers({
  user,
  posts,
  comments,
});

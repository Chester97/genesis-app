import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { posts } from './posts/reducer';

export const rootReducer = combineReducers({
  user,
  posts,
});

// Konkretne "encje" siedza na rownym poziomie z folderami organizacyjnymi (np. sagas).
// Sama konfiguracja sag raczej widzialbym na rowni z plikiem store.js,
// a poszczegolne sagi zwiazane z konkretnymi encjami powinny siedziec w ich folderach,
// czyli np. posts/sagas.js

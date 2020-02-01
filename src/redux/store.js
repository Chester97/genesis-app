import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const initDevTools = () => {
  if (typeof window !== 'undefined') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
};

export const store = createStore(rootReducer, initDevTools());

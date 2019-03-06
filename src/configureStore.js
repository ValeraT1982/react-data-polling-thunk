import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

  return store;
}
import { createStore } from 'redux';
import { signInReducer } from '../reducers';
export function signInStore() {  
  return createStore(signInReducer);
}
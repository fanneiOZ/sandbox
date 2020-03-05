import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import userReducer from './userReducer';

export default authReducer = combineReducers({
  signIn: signInReducer,
  user: userReducer,
});

import { SignInActions } from '../actions';

const authState = {
  logged: null,
  token: null,
};

export default (state = authState, action) => {
  switch (action.type) {
    case SignInActions.types.SIGN_IN:
      return {
        logged: true,
        token: 'ABCD'
      };
      break;
    default:
      return state;
  }
}
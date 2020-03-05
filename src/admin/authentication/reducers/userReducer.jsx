import { UserActions } from '../actions';

const userState = {
  user: null
}

export default (state = userState, action) => {
  switch (action.type) {
    case UserActions.types.FETCH_USER:
      return {
        user: {}
      }
      break;
    default:
      return userState;
  }
}
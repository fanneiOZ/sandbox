export const types = {
  SIGN_IN: 'SIGN_IN'
};

export const signIn = data => {
  return {
    type: types.SIGN_IN,
    payload: data
  }
}
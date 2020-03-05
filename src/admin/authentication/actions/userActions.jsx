export const types = {
  FETCH_USER: 'FETCH_USER'
};

export const user = data => {
  return {
    type: types.FETCH_USER,
    payload: data
  }
} 
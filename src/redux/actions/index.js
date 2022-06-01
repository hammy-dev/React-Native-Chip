export const changeToken = (value) => ({
  type: 'TOGGLE',
  payload: value,
});

export const addBalance = (value) => ({
  type: 'AddBalance',
  payload: value,
});

export const setUser = (value) => ({
  type: 'USERINFO',
  payload: value,
});

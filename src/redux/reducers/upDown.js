const initalState = {
  userToken: false,
  balance: 10,
  userInfo: {},
};

/* eslint default-param-last:0 */
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, userToken: action.payload };
    case 'AddBalance':
      return { ...state, balance: action.payload };
    case 'USERINFO':
      return { ...state, userInfo: action.payload };

    default: return state;
  }
};
export default reducer;

// const reducer = (state = initalState, action) => {
//   switch (action.type) {
//     case 'INCREMENT': return state + action.payload;
//     case 'DECREMENT': return state - 1;
//     default: return state;
//   }
// };

const initialState = {
  admin: {},
  isLogin: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN":
      return {
        ...state,
        admin: action.payload,
      };
    case "SET_IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;

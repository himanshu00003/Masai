import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const initState = {
  isAuth: false,
  token: null,
  error: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isAuth: false, error: action.payload };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};

import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from "./AuthTypes";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return action.payload;

    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;

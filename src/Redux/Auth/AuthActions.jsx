import { USER_LOGOUT, USER_SIGNUP, USER_LOGIN } from "./AuthTypes";

export function RegisterUser(userData) {
  return {
    type: USER_SIGNUP,
    payload: userData,
  };
}

export function LoginUser(loginData) {
  return {
    type: USER_LOGIN,
    payload: loginData,
  };
}

export function LogOutUser() {
  return {
    type: USER_LOGOUT,
  };
}

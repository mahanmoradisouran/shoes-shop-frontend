import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export function getAllProducts() {
  return axios.get("product/");
}

export function userLoginRequest(loginData) {
  return axios.post("user/login", loginData);
}

export function userSignUpRequest(signUpData) {
  return axios.post("user/register", signUpData);
}
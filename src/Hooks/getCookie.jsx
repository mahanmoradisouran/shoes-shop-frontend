import Cookie from "js-cookie";

const getCookie = (key) => {
  return Cookie.get(key);
};

export default getCookie;

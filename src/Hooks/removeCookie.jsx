import Cookie from "js-cookie";

const removeCookie = (key, option = null) => {
  return Cookie.remove(key, option);
};

export default removeCookie;

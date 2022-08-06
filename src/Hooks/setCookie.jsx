import Cookie from "js-cookie";

const initialOptions = {};

const setCookie = (key, value, options = initialOptions) => {
  return Cookie.set(key, value, options);
};

export default setCookie;

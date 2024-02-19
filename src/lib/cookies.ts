import Cookies from "js-cookie";
const tokenKey = "token";

export const getTokenCookie = () => {
  return Cookies.get(tokenKey);
};

export const setTokenCookie = (value: string) => {
  Cookies.set(tokenKey, value);
  return;
};

export const deleteTokenCookie = () => {
  Cookies.remove(tokenKey);
  return;
};

import axios from "axios";
import { getTokenCookie } from "./cookies";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_API;

export const getAuthorizationHeader = () => {
  const token = getTokenCookie();
  if (!token) {
    return {};
  }
  return { Authorization: `Bearer ${token}` };
};

export const fetcher = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    ...getAuthorizationHeader(),
  },
});
export default fetcher;

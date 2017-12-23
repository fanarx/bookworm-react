import { userLoggedIn } from "./auth";
import api from "../api";

export const signup = credentials => dispatch =>
  api.user.signup(credentials).then(user => {
    localStorage.setItem("bookwormJWT", user.token);
    dispatch(userLoggedIn(user));
  });

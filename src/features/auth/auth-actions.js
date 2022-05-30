import axios from "axios";
import { login, logout } from "./authSlice";

export const checkIsLogged = (idToken, expirationTime) => {
  return async (dispatch) => {
    let currentTime = new Date().getTime();
    let exp = new Date(+expirationTime).getTime();
    let remainingTime = exp - currentTime;

    if (remainingTime <= 60000) {
      dispatch(logout());
    }

    if (remainingTime > 60000) {
      const { data } = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc",
        JSON.stringify({ idToken })
      );

      dispatch(
        login({
          token: idToken,
          expirationTime: expirationTime,
          userPhoto: data.users[0].photoUrl,
        })
      );
    }
  };
};

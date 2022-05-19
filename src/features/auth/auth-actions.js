import { login, logout } from "./authSlice";

export const checkIsLogged = (idToken, expirationTime) => {
  return (dispatch) => {
    let currentTime = new Date().getTime();
    let exp = new Date(+expirationTime).getTime();
    let remainingTime = exp - currentTime;

    if (remainingTime > 0 && remainingTime <= 60000) {
      dispatch(logout());
    }

    if (remainingTime > 60000) {
      dispatch(login({ token: idToken, expirationTime: expirationTime }));
    }
  };
};

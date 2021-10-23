import axios from "axios";
import {
  USER_LOGOUT,
  USER_REGISTER,
  LOGIN_SUCCESS,
  INITIALIZE_RESUME,
  RESUME_CLEAR,
  IS_ADMIN,
  IS_NOT_ADMIN,
} from "./types";

export function SignUp(email, password) {
  return async function (dispatch) {
    const response = await axios.post("/auth/signup", { email, password });
    localStorage.setItem("token", response.data.token);
    const userData = {
      // User id
      id: response.data.user.uid,
      auth: {
        // Auth id
        id: response.data.user.aid,
        email: email,
      },
    };

    dispatch({
      type: USER_REGISTER,
      payload: { data: userData, token: response.data.token },
    });

    dispatch({
      type: INITIALIZE_RESUME,
      payload: response.resume,
    });
  };
}

export function Login(email, password) {
  return function (dispatch) {
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const { data, token } = response.data;
        const { uid, email, aid } = data.user;
        const userData = {
          // User id
          id: uid,
          auth: {
            // Auth id
            id: aid,
            email: email,
          },
        };

        if (token && token.length && token.length > 0) {
          localStorage.setItem("token", token);

          dispatch({
            type: LOGIN_SUCCESS,
            payload: { data: userData, token: token },
          });

          dispatch({
            type: INITIALIZE_RESUME,
            payload: data.resume,
          });
        } else {
          console.log("In else");
        }
      })
      .catch((err) => console.log(err));
  };
}

export function Logout() {
  return function (dispatch) {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    dispatch({
      type: USER_LOGOUT,
    });
    dispatch({
      type: RESUME_CLEAR,
    });
  };
}

export function LoadUserByToken(token) {
  return function (dispatch) {
    axios
      .get("/auth/load/" + token)
      .then((response) => {
        const { data, token } = response.data;
        const { uid, email, aid } = data.user;
        const userData = {
          // User id
          id: uid,
          auth: {
            // Auth id
            id: aid,
            email: email,
          },
        };

        // console.log(data);
        if (token && token.length && token.length > 0) {
          localStorage.setItem("token", token);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { data: userData, token: token },
          });

          dispatch({
            type: INITIALIZE_RESUME,
            payload: data.resume,
          });
        } else {
          console.log("In else");
        }
      })
      .catch((err) => console.log(err));
  };
}

export function IsAdmin() {
  return function (dispatch) {
    dispatch({
      type: IS_ADMIN,
    });
  };
}

export function IsNotAdmin() {
  return function (dispatch) {
    dispatch({
      type: IS_NOT_ADMIN,
    });
  };
}

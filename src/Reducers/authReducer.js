import {
  USER_LOGOUT,
  USER_REGISTER,
  LOGIN_SUCCESS,
  IS_ADMIN,
  IS_NOT_ADMIN,
} from "../Actions/types";

const initialState = {
  isLoggedIn: false,
  admin: false,
  user: {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.data,
        token: action.payload.token,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.data,
        token: action.payload.token,
      };
    }

    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        admin: false,
        token: null,
      };
    case IS_ADMIN:
      return {
        ...state,
        admin: true,
      };
    case IS_NOT_ADMIN:
      return {
        ...state,
        admin: false,
      };
    default:
      return state;
  }
}

export default authReducer;

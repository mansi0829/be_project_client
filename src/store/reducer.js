import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  userData: {},
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        userData: payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userData: null,
      };
    }
    default:
      return state;
  }
}
import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../actions/actionTypes";
import Auth from "../auth";

const initialState = {
  user: {},
  registered: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      Auth.authenticateToken(action.payload.headers.get("Access-Token"));
      return {
        ...state,
        user: action.payload.json.user,
        registered: true
      };
    case SIGN_IN:
      Auth.authenticateToken(action.payload.headers.get("Access-Token"));
      return {
        ...state,
        user: action.payload.json.user,
        registered: true
      };
    case SIGN_OUT:
      console.log("signOutReducer", action.payload);

      return {
        ...state,
        user: action.payload.json.user,
        registered: false
      };
    default:
      return state;
  }
}

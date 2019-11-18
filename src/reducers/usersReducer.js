import { SIGN_UP } from "../actions/actionTypes";
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
    default:
      return state;
  }
}

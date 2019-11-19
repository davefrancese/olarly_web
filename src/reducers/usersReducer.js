import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../actions/actionTypes";
import Auth from "../auth";

const initialState = {
  user: {},
  registered: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
    Auth.processHead(action.payload,action.type)
    //dave, above we could also pass a callback if we wanted to before executing anyting else
    //But how could we refactor this - with just moving things around (again not re writing logic)
    //I put a clue in to help
    //the clue is I removed the literal action ie: SIGN_UP with action.type
      return {
        ...state,
        user: action.payload.json.user,
        registered: true
      };
    case SIGN_IN:
      Auth.processHead(action.payload,action.type)
      //old way btw -> Auth.authenticateToken(action.payload.headers.get("Access-Token"));
      return {
        ...state,
        user: action.payload.json.user,
        registered: true
      };
    case SIGN_OUT:
      Auth.processHead(action.payload,action.type)
      return {
        ...state,
        user: action.payload.json.user,
        registered: false
      };
    default:
      return state;
  }
}

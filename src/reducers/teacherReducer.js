import { TEACHER_REGISTER } from "../actions/teacherActions";

const initialState = {
  user: {},
  registered: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEACHER_REGISTER:
      return {
        ...state,
        user: action.payload,
        registered: true
      };
    default:
      return state;
  }
}

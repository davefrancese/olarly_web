import axios from "axios";
import { TEACHER_REGISTER } from "./actionTypes";

const teacherPostUrl = "";

export const registerTeacher = data => async dispatch => {
  const res = await axios.post(teacherPostUrl, data);
  const json = await res.json();
  dispatch({ type: TEACHER_REGISTER, payload: json });
};

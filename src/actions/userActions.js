import { SIGN_UP } from "./actionTypes";
import { SIGN_IN } from "./actionTypes";
import { SIGN_OUT } from "./actionTypes";

export const signUpUser = userParams => dispatch => {
  fetch("http://localhost:3001/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: userParams })
  })
    .then(res =>
      res.json().then(json => ({
        headers: res.headers,
        status: res.status,
        json
      }))
    )
    .then(json =>
      dispatch({
        type: SIGN_UP,
        payload: json
      })
    );
};

export const signInUser = userParams => dispatch => {
  console.log("signed in", SIGN_IN);
};

export const signOutUser = () => dispatch => {
  console.log("signed out", SIGN_OUT);
};

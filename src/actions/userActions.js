import { SIGN_UP } from "./actionTypes";
import { SIGN_IN } from "./actionTypes";
import { SIGN_OUT } from "./actionTypes";

export const signUpUser = userParams => dispatch => {
  fetch("http://olarly-api.herokuapp.com/api/v1/users", {
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
  console.log("signed in", userParams);
  fetch("http://olarly-api.herokuapp.com/api/v1/users/sign_in", {
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
        type: SIGN_IN,
        payload: json
      })
    );
};

export const signOutUser = token => dispatch => {
  console.log("token", token);
  fetch("http://olarly-api.herokuapp.com/api/v1/users/sign_out", {
    method: "DELETE",
    headers: {
      "access-token": token
    }
  })
    .then(res =>
      res.json().then(json => ({
        json
      }))
    )
    .then(json =>
      dispatch({
        type: SIGN_OUT,
        payload: json
      })
    );
};

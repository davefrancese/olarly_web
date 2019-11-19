import { SIGN_UP } from "./actionTypes";
import { SIGN_IN } from "./actionTypes";
import { SIGN_OUT } from "./actionTypes";

//dave, we could totally refactor this idk why this has been common practice.

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

export const userSignOut = (callbackRedirect) => dispatch => {
  fetch("http://olarly-api.herokuapp.com/api/v1/users/sign_out", {
    method: "DELETE",
    headers: {
    //  "access-token": token,
      "client": `client`,
      "uid": `uid`
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
    )
    .then(json => callbackRedirect(json))
};

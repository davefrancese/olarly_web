import {SIGN_UP} from '../actions/actionTypes'

const initialState = {
  user: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case SIGN_UP:
    console.log(action.payload)
    default:
      return state;
  }
}
